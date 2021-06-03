window.onload = function () {

let cor = document.querySelector("#color-palette").firstElementChild;
cor.className = "color cor1 selected";





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
    
    let black = document.getElementsByClassName('color');
    let select = document.querySelector('.selected')
    let color = document.querySelector('.cor1');
    let color2 = document.querySelector('.cor2');
    let color3 = document.querySelector('.cor3');
    let color4 = document.querySelector('.cor4');

    for(let index = 0;index < black.length;index+=1){
        let result = black[index];
    if(result === color && result === select){
        let colorPixel = document.querySelector('.cor5');
        colorPixel.classList.remove('cor5');
        event.target.classList.add('cor1');
    }else if(result === color2 && result === select){
        let colorPixel = document.querySelector('.cor5');
        colorPixel.classList.remove('cor5');
        event.target.classList.add('cor2');
    }else if(result === color3 && result === select){
        let colorPixel = document.querySelector('.cor5');
        colorPixel.classList.remove('cor5');
        event.target.classList.add('cor3');
    }else if(result === color4 && result === select){
        let colorPixel = document.querySelector('.cor5');
        colorPixel.classList.remove('cor5');
        event.target.classList.add('cor4');
    }

    }
}

let enterColor = document.querySelector('#pixel-board');
enterColor.addEventListener('click', paintPixel);
}