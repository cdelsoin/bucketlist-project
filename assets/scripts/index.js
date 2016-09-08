'use strict';


// user require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./entries/events');
const authEvents = require('./auth/events.js');
const entriesEvents = require('./entries/events');
const viewLanding = require('./templates/landing.handlebars');
// const app = require('./app');


//Will display all entries on click of Get All Entries
$(document).on('click','.get-index', function(){
  entriesEvents.onIndexEntries(this.id);
});

//will display all current user specific entries
$(document).on('click','.get-show', function(){
  entriesEvents.onShowEntries(this.id);
});
$(document).on('click','.get-all-completed', function(){
  entriesEvents.onIndexCompleteEntries(this.id);
});

//will display all current user specific entries
$(document).on('click','.show-my-completed', function(){
  entriesEvents.onShowCompleteEntries(this.id);
});

$(document).on('submit','.complete-entry-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  entriesEvents.onPatchEntry(id);
});

$(document).on('submit','.delete-entry-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  entriesEvents.onDeleteEntry(id);
});

$(() => {
  authEvents.addHandlers();
  entriesEvents.addHandlers();
  // entriesEvents.onIndexEntries(); // Will display all entries on page ready
  // entriesEvents.onCompleteEntries();

  $('.get-show').hide();
  $('.entries-container').html(viewLanding());


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
