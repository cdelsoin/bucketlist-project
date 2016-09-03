'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

//prevents page from refreshing and calls a function from ./api
//the function it calls from ./api sends an ajax request to sign a new user up
const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  // console.log(data);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api checks to see if user exists, if they do it
//logs them in
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

//attach listeners to the DOM nodes set all to one variable
//listeners call function associated with the button
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
};

module.exports = {
  addHandlers,
};
