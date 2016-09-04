'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getEntriesSuccess = (data) => {
  debugger;
  const showEntries = require('../templates/entries.handlebars');
  $('.entries-container').html(showEntries({
    entries: data.entries
  }));
  console.log(data);
};

module.exports = {
  success,
  failure,
  getEntriesSuccess,
};
