'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const indexEntriesSuccess = (data) => {
  // debugger;
  const showEntries = require('../templates/entries.handlebars');
  $('.entries-index-container').html(showEntries({
    entries: data.entries
  }));
  console.log(data);
};

module.exports = {
  success,
  failure,
  indexEntriesSuccess,
};
