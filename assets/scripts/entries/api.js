'use strict';

const app = require('../app');

const getEntries = function (){
  return $.ajax({
    url: app.api + '/entries/',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // },
  });
};

module.exports = {
  getEntries,
};
