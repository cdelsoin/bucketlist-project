'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onIndexEntries = function onIndexEntries() {
  let data = getFormFields(this);
  // event.preventDefault();  // will need preventDefault if using a submit btn
  api.indexEntries(data)
    .done(ui.indexEntriesSuccess)
    .fail(ui.failure);
};

const onShowEntries = function onShowEntries() {
  let data = getFormFields(this);
  // event.preventDefault();  // will need preventDefault if using a submit btn
  api.showEntries(data)
    .done(ui.showEntriesSuccess)
    .fail(ui.failure);
};

const onCreateEntry = function onCreateEntry(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.createEntry(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onPatchEntry = function onPatchEntry() {
  // let data = getFormFields(this);
  let isCompleted = true;
  let id = $('.complete-entry-btn').data('id');
  debugger;
  // event.preventDefault();
  api.patchEntry(id, isCompleted)
    .done(ui.success)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('.create-entry').on('submit', onCreateEntry);

};

module.exports = {
  addHandlers,
  onIndexEntries,
  onShowEntries,
  onPatchEntry,
};
