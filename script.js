/* eslint-disable radix */
/* eslint-disable max-lines-per-function */
// eslint-disable-next-line func-names
window.onload = function () {
  const cor = document.querySelector('#color-palette').firstElementChild;
  cor.className = 'color cor1 selected';

  const pix = document.getElementsByClassName('pixel');
  for (let index = 0; index < pix.length; index += 1) {
    const bordas = pix[index];
    bordas.className = 'pixel borde cor5';
  }

  function changeColor() {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    // eslint-disable-next-line no-restricted-globals
    event.target.classList.add('selected');
  }

  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', changeColor);

  function paintPixel(event) {
    const select = document.querySelector('.selected');
    // eslint-disable-next-line no-param-reassign
<<<<<<< HEAD
    event.target.style.backgroundColor =
      window.getComputedStyle(select).backgroundColor;
=======
    event.target.style.backgroundColor = window.getComputedStyle(select).backgroundColor;
>>>>>>> master
  }

  const dom = document.getElementsByClassName('pixel');
  for (let index2 = 0; index2 < dom.length; index2 += 1) {
    const dom2 = dom[index2];
    dom2.addEventListener('click', paintPixel);
  }

  function clear() {
    const clear2 = document.getElementsByClassName('pixel');
    for (let index3 = 0; index3 < clear2.length; index3 += 1) {
      const dom3 = clear2[index3];
      dom3.removeAttribute('style');
    }
    window.location.reload();
  }
  const buton = document.querySelector('#clear-board');
  buton.addEventListener('click', clear);

  function geraColor() {
    // eslint-disable-next-line radix
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);

    return `rgba(${r}, ${g}, ${b})`;
  }
  const gerar = document.getElementsByClassName('color');
  for (let index4 = 1; index4 < gerar.length; index4 += 1) {
    const ger = gerar[index4];
    ger.style.backgroundColor = geraColor();
  }
};

// eslint-disable-next-line sonarjs/no-unused-collection
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 },
];

function sorts(iten) {
  iten.sort((a, b) => {
    if (a.value > b.value) {
      return a.name;
    }
    if (a.value < b.value) {
      return a.name;
    }
    // a must be equal to b
    return 0;
  });
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(sorts(items));
