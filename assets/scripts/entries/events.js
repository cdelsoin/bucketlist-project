'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const app = require('../app');

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

const onUploadImage = function(event) {
  event.preventDefault();
  let data = new FormData(this);
  $.ajax({
    url: app.api + '/uploads',
    method: 'POST',
    processData: false,
    contentType: false,
    data,
  }).done((data) => console.log(data))
    .fail((err) => console.error(err));
};

const onCreateEntry = function onCreateEntry(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.createEntry(data)
  .done(ui.success)
  .fail(ui.failure);
};



const onPatchEntry = function onPatchEntry() {
  let isCompleted = true;
  let id = $('.complete-entry-btn').data('id');
  api.patchEntry(id, isCompleted)
    .done(ui.success)
    .fail(ui.failure);
};

const onDeleteEntry = function onDeleteEntry() {
  let id = $('.delete-entry-btn').data('id');
  api.deleteEntry(id)
    .done(ui.success)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('.create-entry').on('submit', onCreateEntry);
  $('.create-entry').on('submit', onUploadImage);

};

module.exports = {
  addHandlers,
  onIndexEntries,
  onShowEntries,
  onPatchEntry,
  onDeleteEntry,
};
