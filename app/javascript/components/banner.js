import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["traveller", "life explorer", "Italian coffee lover"],
    typeSpeed: 90,
    loop: true
  });
}

export { loadDynamicBannerText };
