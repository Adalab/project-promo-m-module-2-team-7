"use strict";

/*function reset(ev) {
  const formulary = document.getElementById("formCard");
  for (const i = 0; i < formCard; i++) {
    formCard[i].innerHTML = "";
  }
}

const resetAll = document.querySelector(".reset-js");
resetAll.addEventListener("click", reset);*/

/*Tengo que hacer una funcion que recoja todos los campos input (colores, nombre, puesto, imagen, mail, tlf, y rrss)

una vez hecha esta función, que recoge todo, tengo que hacer otra función que restablezca los campos que introduce la usuaria.
Antes definiría el listener del botón RESET. */
const cards_button = document.querySelector(".reset-js");

function resetForm() {
  document.getElementById("cleanForm").value = "";
  if (resetForm === "") {
    cardPreview.innerHTML = "Nombre Completo";
  }
}
cards_button.addEventListener("click", resetForm());
