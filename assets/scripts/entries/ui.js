'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const indexEntriesSuccess = (data) => {
  const viewIndexEntries = require('../templates/index-entries.handlebars');
  $('.entries-index-container').html(viewIndexEntries({
    entries: data.entries
  }));
  console.log(data);
};

const showEntriesSuccess = (data) => {
  const viewShowEntries = require('../templates/show-entries.handlebars');
  // debugger;
  $('.entries-show-container').html(viewShowEntries({
    entries: data.entries
  }));
  console.log(data);
};

const uploadImageSuccess = (data) => {
  console.log(data);
};

module.exports = {
  success,
  failure,
  indexEntriesSuccess,
  showEntriesSuccess,
  uploadImageSuccess,
};
