"use strict";

/*Tengo que hacer una funcion que recoja todos los campos input (colores, nombre, puesto, imagen, mail, tlf, y rrss)

una vez hecha esta función, que recoge todo, tengo que hacer otra función que restablezca los campos que introduce la usuaria.
Antes definiría el listener del botón RESET. */
const cards_button = document.querySelector(".reset-js");
const inputsForm = document.querySelectorAll(".js-form");

function resetForm() {
  document.getElementById("cleanForm").value = "";
  if (resetForm === "") {
    cardPreview.innerHTML = "Nombre Completo";
  }
}
cards_button.addEventListener("click", resetForm());

function resetAll() {
  inputsForm.forEach((el) => {
    el.value = "";
  });

  // Reseteamos la tarjeta
  previewNameElement.innerHTML = placeholderData.name;
  previewJobElement.innerHTML = placeholderData.job;
  profileImage.style.backgroundImage = 'url("../images/uni.png");'; //resetear imagen, queda resetearla del formulario

  // TODO: Repetir con el resto de campos
}

function resetPalettes() {
  //resetear paletas colores e imagen

  const checkedPalette = document.querySelector(".js-palette-color:checked");
  checkedPalette.checked = false;
  const paletteDefault = document.querySelector(".color1");
  paletteDefault.checked = true;
  const cardElement = document.querySelector(".js-cardElement");

  cardElement.classList.remove("opt1", "opt2", "opt3");
  cardElement.classList.add("opt1");
}

/* inspiración ******
const cardElement = document.querySelector('.js-cardElement');
  cardElement.classList.remove('opt1', 'opt2', 'opt3');  cardElement.classList.add( 'opt1');}
function handleReset() {
  updateForm();  updatePreview();  updateInputs();  resetPalettes();
  localStorage.clear();  responseElement.innerHTML ='';}
resetButton.addEventListener('click', handleReset);

function updatePreview(){
  namePreview.innerHTML = 'Nombre Apellido';
  jobPreview.innerHTML = 'Front-end developer';
  profileImage.style.backgroundImage = 'url(./assets/images/avatar-provisional.png)';
  profilePreview.style.backgroundImage = 'url(./assets/images/avatar-provisional.png)';
  mailPreview.href = 'mailto:';
  telPreview.href = 'tel:+34';
  linkedinPreview.href = 'https://www.linkedin.com/in/';
  gitHubPreview.href = 'https://github.com/';
}*/
