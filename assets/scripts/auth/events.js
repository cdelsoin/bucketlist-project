'use strict';

const getFormFields = require('../../../lib/get-form-fields');

//prevents page from refreshing and calls a function from ./api
//the function it calls from ./api sends an ajax request to sign a new user up
const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  console.log(data);
  // api.signUp(data)
  //   .done(ui.success)
  //   .fail(ui.failure);
};

//attach listeners to the DOM nodes set all to one variable
//listeners call function associated with the button
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
};

module.exports = {
  addHandlers,
};
