//const createBtn = document.querySelector(".js-create-card"); están en form
//const responseElement = document.querySelector(".js-response");
const responseElement = document.querySelector(".js-generate");
const twitterBtn = document.querySelector(".twitter-share");
const twitterCardLink = document.querySelector(".js-twitter-link");
let cardLink = ""; // variable donde se guarda link generado por API tarjeta

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
        responseElement.innerHTML = `<a href= "${res.cardURL}">${res.cardURL}</a>`;
        twitterBtn.innerHTML = `<a class="js-new-tw-link" href = "https://twitter.com/intent/tweet?text=${res.cardURL}"</a>`;
        twitterBtn.innerHTML += `<i class="fab fa-twitter list-icon2c"></i>
        Compartir en twitter`;
        responseElement.classList.remove("hidden");
        /*twitterCardLink.setAttribute(
          "href",
          `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${data.cardURL}`
        );*/
      }
    });
}

createBtn.addEventListener("click", handlerCreateCard);
/*
          responseElement.innerHTML = `<h3 class="text-set-up">La tarjeta ha sido creada:</h3>`;
          responseElement.innerHTML += `<p><a href="${data.cardURL}" class="link-set-up js-twitter-link" target="_blank">${data.cardURL}</a></p>`;
          responseElement.innerHTML += `<a class="twitter-button js-btn-twitter" target="_blank">
          */
