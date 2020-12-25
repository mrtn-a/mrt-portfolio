require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// External imports
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import "bootstrap";

import { loadDynamicBannerText } from '../components/banner';

document.addEventListener('turbolinks:load', () => {

  loadDynamicBannerText();

});


import { initRellax } from '../components/rellax.js';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  // ANIMATE ON SCROLL INIT
  AOS.init();
  // [...]
if (document.querySelector('.rellax')) {
    initRellax();
  };

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
