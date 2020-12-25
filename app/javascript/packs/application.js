require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// External imports
import "bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { loadDynamicBannerText } from '../components/banner';
import { initRellax } from '../components/rellax.js';


document.addEventListener('turbolinks:load', () => {
  // JQUERY GLOBAL $ FOR AJAX
  global.$ = jQuery;

  // WELCOME MESSAGE
  console.log('%c%s',
              "color: #FFF; background: #6086A8; font-size: 24px; padding: .5rem; font-family: 'courier'; text-align: center;",
              'Hey there!');

  console.log('%c%s',
              "color: #FFF; background: #6086A8; font-family: 'courier'; padding: .25rem;",
              "I will be happy to connect https://github.com/mrtn-a");

  loadDynamicBannerText();

  // ANIMATE ON SCROLL INIT
  AOS.init();

  //RELLAX INIT
  if (document.querySelector('.rellax')) {
    initRellax();
  };

});
