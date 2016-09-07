'use strict';

const googleplaces = require("googleplaces");

let pac_input = document.getElementById('searchTextField');

let autocomplete = new googleplaces.google.maps.places.Autocomplete(pac_input);

(function pacSelectFirst(input){
    // store the original event binding function
    let _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

    function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.

    if (type === "keydown") {
      let orig_listener = listener;
      listener = function (event) {
        if (event.which === 13 || event.keyCode === 13) {
          let suggestion_selected = $(".pac-item.pac-selected").length > 0;
          if(!suggestion_selected){
            let simulated_downarrow = $.Event("keydown", {keyCode:40, which:40});
            orig_listener.apply(input, [simulated_downarrow]);
          }
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


// Bind dollar signs to query selector (IE8+)
// let $ = document.querySelector.bind(document);
// ***** Initializations ***** //
// initialize pac search field //
// let pacInput = document.getElementById('pac-input');
// pacInput.focus();

// Initialize Autocomplete
// let options = {
//     componentRestrictions: {
//         country: 'us'
//     }
// };

// ***** End Initializations ***** //

// function preventStandardForm(evt) {
//     // prevent standard form from submitting
//     evt.preventDefault();
// }
//
// function autoCallback(predictions, status) {
//     // *Callback from async google places call
//     if (status !== googleplaces.google.maps.places.PlacesServiceStatus.OK) {
//         // show that this address is an error
//         pacInput.className = 'error';
//         return;
//     }
//
//     // Show a successfull return
//     pacInput.className = 'success';
//     pacInput.value = predictions[0].description;
// }
//
//
// function queryAutocomplete(input) {
//     // *Uses Google's autocomplete service to select an address
//     let service = new googleplaces.google.maps.places.AutocompleteService();
//     service.getPlacePredictions({
//         input: input,
//     }, autoCallback);
// }
//
// function handleTabbingOnInput(evt) {
//     // *Handles Tab event on delivery-location input
//     if (evt.target.id === "pac-input") {
//         // Remove active class
//         evt.target.className = '';
//
//         // Check if a tab was pressed
//         if (evt.which === 9 || evt.keyCode === 9) {
//             queryAutocomplete(evt.target.value);
//         }
//     }
// }
//
// // ***** Event Listeners ***** //
// googleplaces.google.maps.event.addListener(autocomplete, 'place_changed', function () {
//     let result = autocomplete.getPlace();
//     if (typeof result.address_components === 'undefined') {
//         queryAutocomplete(result.name);
//     } else {
//         console.log(result.address_components);
//     }
// });
//
// // Tabbing Event Listener
// if (document.addEventListener) {
//     document.addEventListener('keydown', handleTabbingOnInput, false);
// } else if (document.attachEvent) { // IE8 and below
//     document.attachEvent("onsubmit", handleTabbingOnInput);
// }
//
// // search form listener
// let standardForm = $('#multipart-form-data');
// if (standardForm.addEventListener) {
//     standardForm.addEventListener("submit", preventStandardForm, false);
// } else if (standardForm.attachEvent) { // IE8 and below
//     standardForm.attachEvent("onsubmit", preventStandardForm);
// }
