const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports/chrome/',
  reportPath: 'reports/chrome/',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '68',
    },
    device: 'Docker Hub',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Phoenix Web BO' },
      { label: 'Written by', value: 'Bizzy SDET Team' },
      { label: 'Repo', value: 'https://bitbucket.org/bizzyindonesia/phoenix-backoffice-web.git' },
    ],
  },
});
