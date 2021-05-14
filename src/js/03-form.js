'use strict';

/* Form */

const formInputList = document.querySelectorAll(".js-form");
const previewNameElement = document.querySelector(".js-preview-name");
const previewJobElement = document.querySelector('.js-preview-job');
const previewMailElement = document.querySelector('.js-preview-mail');
const previewPhoneElement = document.querySelector('.js-preview-phone');
const previewLinkedinElement = document.querySelector(".js-preview-linkedin");
const previewGithubElement = document.querySelector('.js-preview-github');

const data = {
  name: '',
  job: '',
  mail: '',
  phone: '',
  linkedin: '',
  github: ''
};


function handleChangeForm(ev) {
  // 1. Cojo el nuevo valor y lo guardo en una variable
  
  const inputNameChanged = ev.target.name;
  const inputValueChanged = ev.target.value;

  if( inputNameChanged === 'name' ) {
    data.name = inputValueChanged;
  }
  else if( inputNameChanged === 'job' ) {
    data.job = inputValueChanged;
  }
  else if( inputNameChanged === 'mail' ) {
    data.mail = inputValueChanged;
  }
  else if( inputNameChanged === 'phone' ) {
    data.phone = inputValueChanged;
  }
  else if( inputNameChanged === 'linkedin' ) {
    data.linkedin = inputValueChanged;
  }
  else if( inputNameChanged === 'github' ) {
    data.github = inputValueChanged;
  }


  // 2. Re-pinto la tarjeta de preview

  previewNameElement.innerHTML = data.name;
  previewJobElement.innerHTML = data.job;
  previewMailElement.href = `mailto:${data.main}`;
  previewPhoneElement.href = `tel:${data.phone}`;
  previewLinkedinElement.href = `https://linkedin/${data.linkedin}`;
  previewGithubElement.href = `https://github/${data.github}`;

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

for( const eachInput of formInputList ) {
    eachInput.addEventListener("keyup", handleChangeForm);
}



console.log(">> Form Ready :)");