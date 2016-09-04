'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onGetEntries = function onGetEntries() {
  let data = getFormFields(this);
  // event.preventDefault();
  api.getEntries(data)
    .done(ui.getEntriesSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.get').on('click', onGetEntries);
};

module.exports = {
  addHandlers,
  onGetEntries,
};
