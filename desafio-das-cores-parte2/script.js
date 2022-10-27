const transparentColor = document.querySelector("#transparent-color");
const formContainer = document.querySelector("#form-container");
const elipsesContainer = document.querySelector('.elipses-container');
const bigCircle = document.querySelector("#circle");
const inputColor = document.querySelector("#hexadecimal");
const whiteInput = document.querySelector("#white-input");
const btnConfirmar = document.querySelector("#btnConfirmar");
const labelsColor = document.querySelectorAll(".form input[name='label-color']");

function enableButtonSubmit() {
  btnConfirmar.disabled = false;
  btnConfirmar.style.cursor = 'pointer';
  btnConfirmar.style.backgroundColor = 'blue';
}

function disableButtonSubmit() {
  btnConfirmar.disabled = false;
  btnConfirmar.style.cursor = 'not-allowed';
  btnConfirmar.style.backgroundColor = '#5b5f6e';
}

function handleForm() {
  inputColor.addEventListener('keyup', () => {
    
    const isRadioChecked = Array.from(labelsColor).find((inputRadio) => inputRadio.checked === true);
    if (isRadioChecked && inputColor.value) {
      enableButtonSubmit();
    } else {
      disableButtonSubmit();
    }
  })

  labelsColor.forEach((inputRadio)=>{
    inputRadio.addEventListener('change', () => {
      if(inputColor.value) {
        enableButtonSubmit();
      } else {
        disableButtonSubmit();
      }
    })
  })
}

function openForm() {
  transparentColor.style.display = 'block';
  formContainer.style.display = 'flex';
  window.scrollTo({ top: 0,behavior: 'smooth' });
  document.body.style.overflowY = "hidden";
  document.querySelector(".input-form").focus();
  handleForm();
}

function closeForm() {
  transparentColor.style.display = 'none';
  formContainer.style.display = 'none';
  document.body.style.overflowY = "auto";
}

function colorBigCircle(inputColor) {
  bigCircle.style.backgroundColor = inputColor;
}

function bordeReset() {
  const allElipses = document.getElementsByClassName("elipse");
  for (let i = 0; i < allElipses.length; i++) {
    allElipses[i].style.border = "none";
  }
}

function initialColor() {
  bordeReset();
  bigCircle.style.backgroundColor = "#D9D9D9";
}

function selectedElipse(elipse) {
  bordeReset()
  elipse.style.border = "4px solid black";
}

function createElipse() {
  const elipse = document.createElement("button");
  elipse.className = 'elipse';

  const {value} = inputColor
  
  elipse.addEventListener("click", () => { colorBigCircle(value), selectedElipse(elipse) });
  elipse.style.backgroundColor = value;
  
  const inputRadio = Array.from(labelsColor).find((inputRadio) => inputRadio.checked === true);
  const paragraph = document.createElement("p");
  paragraph.innerHTML = value;
  paragraph.style.color = inputRadio.value

  elipse.appendChild(paragraph);
  elipsesContainer.appendChild(elipse);
  closeForm();
}