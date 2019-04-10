const global = require('./../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'GET scenario OK aja',
    response: global.response.ok,
  },
  getWithoutAuth: {
    desc: 'GET scenario without auth',
    response: global.response.withoutAuth,
  },
  getInvalidAuth: {
    desc: 'GET scenario using other user Auth',
    response: global.response.invalidAuth,
  },
});

module.exports = {
  scenario,
};
