'use strict';

console.log('>> Ready :)');
const buttonArrowDown = document.querySelector(".ico-scroll");
const buttonArrowFill = document.querySelector(".fill-arrow");
const buttonArrowShare = document.querySelector(".share-arrow");

const infoPage = document.querySelector(".color-design");
const fillPage = document.querySelector(".fill-container");
const sharePage = document.querySelector(".share-container");

//función para esconder elementos
function hiddenSection (event) {
event.preventDefault(); // hace que al desclicar el botón, la función siga funcionando

infoPage.classList.toggle("js-hidden");
console.log("hola");
    
}
buttonArrowDown.addEventListener("click", hiddenSection);


//RELLENA

function hiddenSectionFill (event) {
    event.preventDefault(); // hace que al desclicar el botón, la función siga funcionando
    
    fillPage.classList.toggle("js-hidden");
    console.log("hola");
        
    }
buttonArrowFill.addEventListener("click", hiddenSectionFill);


// COMPARTE

function hiddenSectionShare (event) {
    event.preventDefault(); // hace que al desclicar el botón, la función siga funcionando
    
    sharePage.classList.toggle("js-hidden");
    console.log("hola");
        
    }
buttonArrowShare.addEventListener("click", hiddenSectionShare);
