require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// External imports
import "bootstrap";
import AOS from 'aos';


import { navToggle } from '../components/nav_toggle';
import { loadDynamicBannerText } from '../components/banner';
import { initRellax } from '../components/rellax.js';


document.addEventListener('turbolinks:load', () => {

  // ANIMATE ON SCROLL INIT
  AOS.init();

  // WELCOME MESSAGE
  console.log('%c%s',
              "color: #FFF; background: #6086A8; font-size: 24px; padding: .5rem; font-family: 'courier'; text-align: center;",
              'Hey there!');

  console.log('%c%s',
              "color: #FFF; background: #6086A8; font-family: 'courier'; padding: .25rem;",
              "I will be happy to connect https://github.com/mrtn-a");

  loadDynamicBannerText();

  // NAVBAR ANIMATION
  navToggle();

  //RELLAX INIT
  if (document.querySelector('.rellax')) {
    initRellax();
  };

});

window.addEventListener('load', AOS.refresh)
