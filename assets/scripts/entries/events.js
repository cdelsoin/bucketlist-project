'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onIndexEntries = function onIndexEntries() {
  let data = getFormFields(this);
  // event.preventDefault();
  api.indexEntries(data)
    .done(ui.indexEntriesSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.get-index').on('click', onIndexEntries);
};

module.exports = {
  addHandlers,
  onIndexEntries,
};
