'use strict';

const app = require('../app');

const indexEntries = function (){
  return $.ajax({
    url: app.api + '/entries/',
    method: 'GET',
  });
};

module.exports = {
  indexEntries,
};
