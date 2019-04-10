const global = require('./../helper/global.js');

const scenario = ({
  getOK: {
    desc: 'POST scenario OK aja',
    response: global.response.ok,
  },
  getWithoutAuth: {
    desc: 'POST scenario without auth',
    response: global.response.withoutAuth,
  },
  getInvalidAuth: {
    desc: 'POST scenario using other user Auth',
    response: global.response.invalidAuth,
  },
});

module.exports = {
  scenario,
};
