window.onload = function () {

let cor = document.querySelector("#color-palette").firstElementChild;
cor.className = "color cor1 selected ";



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

function paintPixel (event){
    let select = document.querySelector('.selected');
    event.target.style.backgroundColor = window.getComputedStyle(select).backgroundColor; 
}

let dom = document.getElementsByClassName('pixel')
    for(let index2 = 0; index2 < dom.length; index2 +=1){
        let dom2 = dom[index2];
    dom2.addEventListener('click', paintPixel);
    }

function clear(){
let clear2 = document.getElementsByClassName('pixel')
for(let index3 = 0; index3 < clear2.length; index3 +=1){
    let dom3 = clear2[index3];
     dom3.removeAttribute('style');
    }
}
let buton = document.querySelector('#clear-board');
buton.addEventListener('click', clear);

}
