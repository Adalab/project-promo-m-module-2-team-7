'use strict';

console.log('>> Ready :)');

const arrowUpDesign = document.querySelector(".js-arrow-up-d");
const arrowDownDesign = document.querySelector(".js-arrow-down-d");

const arrowUpFill = document.querySelector(".js-arrow-up-f");
const arrowDownFill = document.querySelector(".js-arrow-down-f");

const arrowUpShare = document.querySelector(".js-arrow-up-s");
const arrowDownShare = document.querySelector(".js-arrow-down-s");

const infoPage = document.querySelector(".color-design");
const fillPage = document.querySelector(".fill-container");
const sharePage = document.querySelector(".share-container");

const designTitle = document.querySelector(".js-design-title");
const fillTitle = document.querySelector(".js-fill-title2");
const shareTitle = document.querySelector(".js-share-title3");

const finishedCard = document.querySelector(".card-done");
const createCardBtn = document.querySelector(".js-create-card");


function hideShare (ev) {
    ev.preventDefault();
    sharePage.classList.toggle("js-hidden");
    arrowDownShare.classList.toggle("js-hidden");
    arrowUpShare.classList.toggle("js-hidden");
    }


function hideFill (ev) {
    ev.preventDefault();
    fillPage.classList.toggle("js-hidden");
    arrowDownFill.classList.toggle("js-hidden");
    arrowUpFill.classList.toggle("js-hidden");
        
    }


function hideSDesign (ev) {
    ev.preventDefault();
    infoPage.classList.toggle("js-hidden");
    arrowUpDesign.classList.toggle("js-hidden");
    arrowDownDesign.classList.toggle("js-hidden");
        
    }


designTitle.addEventListener("click", hideSDesign);
fillTitle.addEventListener("click", hideFill);
shareTitle.addEventListener("click", hideShare);


function showFinishedCard () {
    finishedCard.classList.remove("js-hidden");

}

createCardBtn.addEventListener("click", showFinishedCard);