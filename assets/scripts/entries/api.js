'use strict';

const app = require('../app');

//gets all entries
const indexEntries = function (){
  return $.ajax({
    url: app.api + '/entries/',
    method: 'GET',
  });
};

//gets all user specific entries
const showEntries = function (){
  return $.ajax({
    url: app.api + '/user-entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

const createEntry = function (data){
  console.log(data);
  return $.ajax ({
    url: app.api + '/entries/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const patchEntry = function (data){
  return $.ajax ({
    url: app.api + '/entry/' + app.entry._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data,
  });
};


module.exports = {
  indexEntries,
  showEntries,
  createEntry,
  patchEntry,
};
