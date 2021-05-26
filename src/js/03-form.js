"use strict";

/* Form */

const formInputList = document.querySelectorAll(".js-form");
const previewNameElement = document.querySelector(".js-preview-name");
const previewJobElement = document.querySelector(".js-preview-job");
const previewMailElement = document.querySelector(".js-preview-mail");
const previewPhoneElement = document.querySelector(".js-preview-phone");
const previewLinkedinElement = document.querySelector(".js-preview-linkedin");
const previewGithubElement = document.querySelector(".js-preview-github");

const data = {
  palette: 1,
  name: "",
  job: "",
  mail: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};
const placeholderData = {
  name: "Nombre Apellido",
  job: "Front-end developer",
};

function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable
  // 2. Re-pinto la tarjeta de preview

  const inputNameChanged = ev.target.name;
  const inputValueChanged = ev.target.value;

  if (inputNameChanged === "name") {
    data.name = inputValueChanged;
    previewNameElement.innerHTML = data.name || placeholderData.name;
  } else if (inputNameChanged === "job") {
    data.job = inputValueChanged;
    previewJobElement.innerHTML = data.job;
    previewJobElement.innerHTML = data.job || placeholderData.job;
  } else if (inputNameChanged === "mail") {
    // TODO: igual que linkedin
    data.mail = inputValueChanged;
    previewMailElement.href = `mailto:${data.main}`;
  } else if (inputNameChanged === "phone") {
    // TODO: igual que linkedin
    data.phone = inputValueChanged;
    previewPhoneElement.href = `tel:${data.phone}`;
  } else if (inputNameChanged === "linkedin") {
    data.linkedin = inputValueChanged;
    previewLinkedinElement.href = `https://linkedin.com/${data.linkedin}`;
  } else if (inputNameChanged === "github") {
    data.github = inputValueChanged;
    previewGithubElement.href = `https://github.com/${data.github}`;
  }

  /*
  const inputChanged = ev.target;
  const changedValue = inputChanged.value;
  if (inputChanged.name === "name") {
    previewNameElement.innerHTML = changedValue;
  } else if ( inputChanged.name === "job") {
    previewJobElement.innerHTML = changedValue;
  
  
  } else if (inputChanged.name === "linkedin") {
    previewLinkedinElement.href = changedValue;
  }
  console.log("Target", ev.target);
  console.log("Current Target", ev.currentTarget);
*/
}

for (const eachInput of formInputList) {
  eachInput.addEventListener("keyup", handleChangeForm);
}

//Prueba del check de los colores para que cambie la tarjeta

const cardPreview = document.querySelector(".js-card_box");
const paletteRadios = document.querySelectorAll(".js-palette");

function handlerChangeColor(ev) {
  cardPreview.classList.remove("palette-1", "palette-2", "palette-3");
  if (ev.target.value === "blue") {
    cardPreview.classList.add("palette-1");
  } else if (ev.target.value === "red") {
    cardPreview.classList.add("palette-2");
  } else if (ev.target.value === "mixedcolor") {
    cardPreview.classList.add("palette-3");
  }
}

for (const radio of paletteRadios) {
  radio.addEventListener("click", handlerChangeColor);
}

// Enviar al servidor clase de Iván
const createBtn = document.querySelector(".js-create-card");
const responseElement = document.querySelector(".js-response");

function handlerCreateCard(event) {
  event.preventDefault();

  //HAY QUE PONER LAS CONDICIONES SI EL NOMBRE ESTA VACIO O EL PUESTO, EL ULTIMO ELSE ES ES FECTH

  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        responseElement.innerHTML = "Tienes que rellenar los datos";
        responseElement.classList.remove("hidden");
      } else {
        responseElement.innerHTML = `<a href= "${data.cardURL}">Direccion`;
        responseElement.classList.remove("hidden");
      }
    });
}

createBtn.addEventListener("click", handlerCreateCard);
