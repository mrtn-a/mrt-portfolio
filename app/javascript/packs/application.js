// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import AOS from 'aos';
import 'aos/dist/aos.css';

import "bootstrap";
// import { initRellax } from '../plugins/rellax.js';

import { loadDynamicBannerText } from '../components/banner';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  // [...]
  loadDynamicBannerText();
});


import { initRellax } from '../components/rellax.js';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  // [...]
if (document.querySelector('.rellax')) {
    initRellax();
  };
  // ANIMATE ON SCROLL INIT
  AOS.init();

});

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {

  // WELCOME MESSAGE
  console.log('%c%s',
              "color: #FFF; background: #6086A8; font-size: 24px; padding: .5rem; font-family: 'courier'; text-align: center;",
              'Hey there!');

  console.log('%c%s',
              "color: #FFF; background: #6086A8; font-family: 'courier'; padding: .25rem;",
              "I will be happy to connect https://github.com/mrtn-a");
  // Call your functions here, e.g:
  // initSelect2();

  //RELLAX INIT
  // if (document.querySelector('.rellax')) {
  //   initRellax();
  // };

});
