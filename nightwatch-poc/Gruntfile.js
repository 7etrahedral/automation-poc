/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    concat: {
      browserconfig: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/browserconfig.json'],
        dest: 'browserconfig.json',
      },
      chrome: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/nightwatch_chrome.conf.js'],
        dest: 'nightwatch_chrome.conf.js',
      },
      firefox: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/nightwatch_firefox.conf.js'],
        dest: 'nightwatch_firefox.conf.js',
      },
      dockerchrome: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/docker-chrome-conf.js'],
        dest: 'docker-chrome-conf.js',
      },
      dockerfirefox: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/docker-firefox-conf.js'],
        dest: 'docker-firefox-conf.js',
      },
      dockerphantomjs: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/docker-phantomjs-conf.js'],
        dest: 'docker-phantomjs-conf.js',
      },
    },
  });

  grunt.registerTask('default', ['concat']);
};
