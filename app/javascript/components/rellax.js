import Rellax from 'rellax';

const initRellax = () => {
  const rellaxes = document.querySelectorAll('.rellax')
  rellaxes.forEach((rel) => {
    let rellax = new Rellax(rel);
  })
};

export { initRellax };
