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

  // TODO: Repetir con el resto de campos
}
