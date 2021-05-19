'use strict';

console.log('>> Ready :)');
const buttonArrowDown = document.querySelector(".ico-scroll");
const buttonArrowFill = document.querySelector(".fill-arrow");
const buttonArrowShare = document.querySelector(".share-arrow");
const buttonCreate = document.querySelector(".new-card");

const infoPage = document.querySelector(".color-design");
const fillPage = document.querySelector(".fill-container");
const sharePage = document.querySelector(".share-container");
const finishedCard = document.querySelector(".card-done");


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


// crear tarjeta

function handlerCreateBtn (event) {
    event.preventDefault();
    finishedCard.classList.remove("js-hidden");
}

buttonCreate.addEventListener("click", handlerCreateBtn)

/*
//función global para todas secciones
function hideSection (section) {
    // hace que al desclicar el botón, la función siga funcionando
    
    section.classList.toggle("js-hidden");
    console.log("hola,estoy funcionando");
        
    }

function handleClick (event){
    event.preventDefault();
    const sectionTarget = event.current.target;

    hideSection (sectionTarget)
    console.log(sectionTarget);
    //hideSection (event, fillPage);
    //hideSection (event, sharePage);
}



buttonArrowDown.addEventListener("click", handleClick);
buttonArrowFill.addEventListener("click", handleClick);
buttonArrowShare.addEventListener("click", handleClick);
*/
