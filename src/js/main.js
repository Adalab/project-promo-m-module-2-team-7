'use strict';

console.log('>> Ready :)');
const buttonArrowDown = document.querySelector(".ico-scroll");
const infoPage = document.querySelector(".color-design");
const contactPage = document.querySelector(".contact-container");
//función para esconder elementos
function hiddenSection (event) {
event.preventDefault(); // hace que al desclicar el botón, la función siga funcionando
infoPage.classList.toggle("js-hidden");
console.log("hola");
    
}
buttonArrowDown.addEventListener("click", hiddenSection);

