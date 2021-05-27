//const createBtn = document.querySelector(".js-create-card"); están en form
//const responseElement = document.querySelector(".js-response");
const responseElement = document.querySelector(".js-generate");

function handlerCreateCard(event) {
  event.preventDefault();

  //HAY QUE PONER LAS CONDICIONES SI EL NOMBRE ESTA VACIO O EL PUESTO, EL ULTIMO ELSE ES ES FECTH
  console.log(data);
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.success === false) {
        responseElement.innerHTML = "Tienes que rellenar los datos";
        responseElement.classList.remove("hidden");
      } else {
        responseElement.innerHTML = `<a href= "${res.cardURL}">${res.cardURL}`;
        responseElement.classList.remove("hidden");
      }
    });
}

createBtn.addEventListener("click", handlerCreateCard);

/*API URL https://awesome-profile-cards.herokuapp.com/

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
*/
