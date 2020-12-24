import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hey, I'm Martyna   "],
    typeSpeed: 130,
    loop: false
  });
}

export { loadDynamicBannerText };
