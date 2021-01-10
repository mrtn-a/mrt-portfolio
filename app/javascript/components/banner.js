import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hey, I'm <span id='curly'>Martyna</span>"],
    typeSpeed: 130,
    loop: false
  });
}

export { loadDynamicBannerText };

