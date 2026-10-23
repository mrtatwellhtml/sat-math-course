/**
 * SAT Math — build the Google Forms quizzes
 * ------------------------------------------------------------------
 * Creates one auto-graded Google Form per quiz, in a folder in your Drive.
 * Multiple-choice questions are marked by Forms. Short-answer questions get
 * an answer key too, through the Forms REST API, so the whole quiz grades
 * itself and the score flows into the Classroom gradebook.
 *
 * HOW TO RUN
 *   1. Go to script.google.com and start a new project.
 *   2. Paste this file over Code.gs.
 *   3. Add a second file called QuizData.gs and paste QuizData.gs into it.
 *   4. Click the gear (Project Settings) and tick
 *      "Show appsscript.json manifest file in editor".
 *   5. Open appsscript.json, replace it with the one in this folder, and save.
 *   6. Back in Code.gs, choose buildAllQuizzes from the function list and Run.
 *      Google will ask you to authorise it. The warning screen is normal for a
 *      script you wrote yourself: Advanced → Go to (project) → Allow.
 *   7. The log prints an edit link and a share link for each quiz.
 *
 * RE-RUNNING replaces nothing — it creates a fresh set. Delete the old folder
 * first if you do not want duplicates.
 */

var FOLDER_NAME = 'SAT Math — Quizzes';

// Set false if you only want multiple choice marked automatically.
var AUTOGRADE_SHORT_ANSWER = true;


function buildAllQuizzes() {
  var folder = getOrCreateFolder_(FOLDER_NAME);
  var made = [];

  QUIZ_DATA.quizzes.forEach(function (quiz) {
    var built = buildOneQuiz_(quiz, folder);
    made.push(built);
    Logger.log('Built: ' + built.title);
    Logger.log('   edit:  ' + built.editUrl);
    Logger.log('   share: ' + built.shareUrl);
  });

  Logger.log('');
  Logger.log('Done. ' + made.length + ' quizzes in the Drive folder "' + FOLDER_NAME + '".');
  Logger.log('In Google Classroom: Classwork → Create → Quiz assignment → remove the');
  Logger.log('blank Form it attaches, then attach the one you want from Drive.');
  return made;
}


/** Build a single quiz. Returns {title, id, editUrl, shareUrl}. */
function buildOneQuiz_(quiz, folder) {
  var form = FormApp.create(quiz.title);
  form.setIsQuiz(true);
  form.setDescription(quiz.blurb);
  form.setCollectEmail(true);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setPublishingSummary(false);          // they see their own score, not everyone's

  var textItemRows = [];                     // {index, answers[], solution}

  quiz.questions.forEach(function (q, i) {
    var label = 'Q' + (i + 1);
    if (q.type === 'mc') {
      addMultipleChoice_(form, q, label);
    } else {
      addShortAnswer_(form, q, label);
      textItemRows.push({
        order: form.getItems().length - 1,
        answers: (q.accept && q.accept.length) ? q.accept : [q.answer],
        solution: q.solution
      });
    }
  });

  if (AUTOGRADE_SHORT_ANSWER && textItemRows.length) {
    try {
      applyShortAnswerKeys_(form.getId(), textItemRows);
    } catch (err) {
      Logger.log('  ! Short answers on "' + quiz.title + '" were left unmarked: ' + err);
      Logger.log('    (Check the manifest scopes, or set AUTOGRADE_SHORT_ANSWER = false.)');
    }
  }

  // move it out of the Drive root into the folder
  var file = DriveApp.getFileById(form.getId());
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);

  return {
    title: quiz.title,
    id: form.getId(),
    editUrl: form.getEditUrl(),
    shareUrl: form.getPublishedUrl()
  };
}


function addMultipleChoice_(form, q, label) {
  var item = form.addMultipleChoiceItem();
  item.setTitle(label + '.  ' + q.stem);
  item.setPoints(1);
  item.setRequired(false);

  var letters = ['A', 'B', 'C', 'D'];
  var choices = q.choices.map(function (text, j) {
    return item.createChoice(letters[j] + ')  ' + text, letters[j] === q.answer);
  });
  item.setChoices(choices);

  var right = FormApp.createFeedback().setText('Correct. ' + q.solution).build();

  // Name the mistake behind each wrong option — that is the teaching part.
  var notes = [];
  letters.forEach(function (L) {
    if (L !== q.answer && q.distractors && q.distractors[L]) {
      notes.push(L + ') comes from ' + q.distractors[L] + '.');
    }
  });
  var wrongText = 'The answer is ' + q.answer + '.  ' + q.solution;
  if (notes.length) wrongText += '\n\n' + notes.join('\n');

  item.setFeedbackForCorrect(right);
  item.setFeedbackForIncorrect(FormApp.createFeedback().setText(wrongText).build());
}


function addShortAnswer_(form, q, label) {
  var item = form.addTextItem();
  item.setTitle(label + '.  ' + q.stem);
  item.setHelpText('Type your answer. A fraction such as 3/4 is fine.');
  item.setPoints(1);
  item.setRequired(false);
  item.setGeneralFeedback(
    FormApp.createFeedback().setText('Answer: ' + q.answer + '.  ' + q.solution).build()
  );
}


/**
 * Forms' Apps Script service cannot set an answer key on a short-answer
 * question, but the REST API can. One batchUpdate per form does the lot.
 */
function applyShortAnswerKeys_(formId, rows) {
  var token = ScriptApp.getOAuthToken();
  var base = 'https://forms.googleapis.com/v1/forms/' + formId;

  var got = UrlFetchApp.fetch(base, {
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true
  });
  if (got.getResponseCode() !== 200) {
    throw new Error('Could not read the form back (' + got.getResponseCode() + '): ' + got.getContentText());
  }
  var items = (JSON.parse(got.getContentText()).items) || [];

  var requests = rows.map(function (row) {
    var item = items[row.order];
    if (!item || !item.questionItem) throw new Error('No question at position ' + row.order);
    return {
      updateItem: {
        item: {
          itemId: item.itemId,
          title: item.title,
          questionItem: {
            question: {
              questionId: item.questionItem.question.questionId,
              required: false,
              textQuestion: { paragraph: false },
              grading: {
                pointValue: 1,
                correctAnswers: {
                  answers: row.answers.map(function (a) { return { value: String(a) }; })
                },
                generalFeedback: { text: row.solution }
              }
            }
          }
        },
        location: { index: row.order },
        updateMask: 'questionItem.question.grading'
      }
    };
  });

  var res = UrlFetchApp.fetch(base + ':batchUpdate', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + token },
    payload: JSON.stringify({ requests: requests }),
    muteHttpExceptions: true
  });
  if (res.getResponseCode() !== 200) {
    throw new Error('batchUpdate failed (' + res.getResponseCode() + '): ' + res.getContentText());
  }
}


function getOrCreateFolder_(name) {
  var existing = DriveApp.getFoldersByName(name);
  return existing.hasNext() ? existing.next() : DriveApp.createFolder(name);
}


/** Build one quiz only, for a quick test. Pass 'q1'…'q5'. */
function buildOne(key) {
  var k = key || 'q1';
  var quiz = QUIZ_DATA.quizzes.filter(function (z) { return z.key === k; })[0];
  if (!quiz) throw new Error('No quiz with key ' + k + '. Try q1 to q5.');
  var built = buildOneQuiz_(quiz, getOrCreateFolder_(FOLDER_NAME));
  Logger.log(built.title + '\n  edit: ' + built.editUrl + '\n  share: ' + built.shareUrl);
  return built;
}
