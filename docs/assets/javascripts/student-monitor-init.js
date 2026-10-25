// Student Monitor for the lesson pages: records time on each page and asks for a name once
// (the workbook's name is reused if the student has typed it there). The workbook logs its own answers.
StudentMonitor.init({
  site: 'sat-math',
  askName: true,
  autoVisits: true,
  name: function () { try { return localStorage.getItem('satmath.student') || ''; } catch (e) { return ''; } },
});
