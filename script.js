window.onload = function () {


}

let  pix = document.getElementsByClassName("pixel");
for(let index = 0; index< pix.length;index+=1){
    let bordas = pix[index];
    bordas.className = " pixel bord"
}

let cor = document.querySelector("#color-palette").firstElementChild;
cor.className = "color cor1 selected";

