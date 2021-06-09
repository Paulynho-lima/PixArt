window.onload = function() {

  const cor = document.querySelector('#color-palette').firstElementChild;
    cor.className = 'color cor1 selected';



  const pix = document.getElementsByClassName('pixel');
    for(let index = 0; index < pix.length;index += 1) {
    const bordas = pix[index];
    bordas.className = 'pixel borde cor5'
  }

  function changeColor() {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }

  let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', changeColor);
  
  function paintPixel (event) {
    let select = document.querySelector('.selected');
    event.target.style.backgroundColor = window.getComputedStyle(select).backgroundColor; 
  }

  const dom = document.getElementsByClassName('pixel')
    for(let index2 = 0; index2 < dom.length; index2 +=1) {
        let dom2 = dom[index2];
    dom2.addEventListener('click', paintPixel);
    }

  function clear() {
    let clear2 = document.getElementsByClassName('pixel')
    for(let index3 = 0; index3 < clear2.length; index3 += 1) {
    let dom3 = clear2[index3];
     dom3.removeAttribute('style');
    }
  }
  const buton = document.querySelector('#clear-board');
    buton.addEventListener('click', clear);

  function  geraColor() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
   
    return `rgba(${r}, ${g}, ${b})`;
  }
  const gerar = document.getElementsByClassName('color');
    for(let index4 = 1; index4 < gerar.length; index4 += 1) {
    let ger = gerar[index4]
    ger.style.backgroundColor = geraColor();
   }
}
