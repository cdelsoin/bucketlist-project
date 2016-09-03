'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  delete app.user;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
