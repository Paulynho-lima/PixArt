window.onload = function () {

let cor = document.querySelector("#color-palette").firstElementChild;
cor.className = "color cor1 selected";



}

let  pix = document.getElementsByClassName("pixel");
for(let index = 0; index< pix.length;index+=1){
    let bordas = pix[index];
    bordas.className = " pixel borde cor5 "
}

function changeColor() {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}

let colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', changeColor);

function paintPixel (){
let colorPixel = document.querySelector('.cor5');
colorPixel.classList.remove('cor5');
event.target.classList.add('cor4');

}
let enterColor = document.querySelector('#pixel-board');
enterColor.addEventListener('click', paintPixel);