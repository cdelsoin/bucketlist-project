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

$(document).on('submit','.complete-entry-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  entriesEvents.onPatchEntry(id);
});

// $(document).on('click', 'get-completed', function() {
//   entriesEvents.onCompleteEntries(this.id);
// });

$(document).on('submit','.delete-entry-form', function(event){
  event.preventDefault();
  let id = $(this).data('id');
  entriesEvents.onDeleteEntry(id);
});
const pac_input = document.getElementById('searchTextField');

(function pacSelectFirst(input){
    // store the original event binding function
    const _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

    function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.

    if (type ==="keydown") {
      const orig_listener = listener;
      listener = function (event) {
        const suggestion_selected = $(".pac-item-selected").length > 0;
        if (event.which === 13 && !suggestion_selected) {
          const simulated_downarrow = $.Event("keydown", {keyCode:40, which:40});
          orig_listener.apply(input, [simulated_downarrow]);
        }

        orig_listener.apply(input, [event]);
      };
    }

    // add the modified listener
    _addEventListener.apply(input, [type, listener]);
  }

  if (input.addEventListener){
    input.addEventListener = addEventListenerWrapper;
  } else if (input.attachEvent){
    input.attachEvent = addEventListenerWrapper;
}
})(pac_input);


$(function(){
  const autocomplete = new google.maps.places.Autocomplete(pac_input);
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

  //   $('#multipart-form-data').on('submit', function(event){
  //   event.preventDefault();
  //   let data = new FormData(this);
  //   console.log('FormData', data , this);
  //   $.ajax({
  //     url: app.api + '/uploads/',
  //     method: 'POST',
  //     processData: false,
  //     contentType: false,
  //     data,
  //   }).done((data) => console.log(data))
  //     // .done(console.log(data.upload.url))
  //     // .then(entriesEvents.urlPatchEntry(id, url)
  //     .fail((err) => console.error(err));
  // });
});
