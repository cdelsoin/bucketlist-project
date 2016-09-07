'use strict';

const app = require('../app');

$.fn.clearForm = function() {
  return this.each(function() {
    let type = this.type, tag = this.tagName.toLowerCase();
    if (tag === 'form')
      {return $(':input',this).clearForm();}
    if (type === 'text' || type === 'password' || tag === 'textarea')
      {this.value = '';
    }else if (type === 'checkbox' || type === 'radio'){
      this.checked = false;
    }else if (tag === 'select'){
      this.selectedIndex = -1;
  }});
};

const success = (data) => {
  console.log(data);
  $('#change-password').clearForm();
  $('#sign-up').clearForm();
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
$('#sign-in').clearForm();
$('.get-show').show();

};

const signOutSuccess = () => {
  $('.entries-container').html('');
  delete app.user;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
