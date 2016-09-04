'use strict';

const authEvents = require('./auth/events.js');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./entries/events');
const entriesEvents = require('./entries/events');


//Will display all entries on click of Get All Entries
$(document).on('click','.get-index', function(){
  entriesEvents.onIndexEntries(this.id);
});

//will display all current user specific entries
$(document).on('click','.get-show', function(){
  entriesEvents.onShowEntries(this.id);
});

$(() => {
  authEvents.addHandlers();
  entriesEvents.addHandlers();

  entriesEvents.onIndexEntries(); // Will display all entries on page ready

  $('.select-sign-up').on('click', function(){
    $('.sign-up-modal').modal('show');
  });
  $('.sign-up-btn').on('click', function(){
    $('.sign-up-modal').modal('hide');
  });
  $('.select-sign-in').on('click', function(){
    $('.sign-in-modal').modal('show');
  });
  $('.sign-in-btn').on('click', function(){
    $('.sign-in-modal').modal('hide');
  });
  $('.select-change-password').on('click', function(){
    $('.change-password-modal').modal('show');
  });
  $('.change-password-btn').on('click', function(){
    $('.change-password-modal').modal('hide');
  });

  $('.select-create-entry').on('click', function(){
    $('.create-entry-modal').modal('show');
  });
  $('.create-entry-btn').on('click', function(){
    $('.create-entry-modal').modal('hide');
  });
});
