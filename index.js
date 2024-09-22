const openModalEl = document.querySelector(".modal-open");
const modalBackdropEl = document.querySelector(".backdrop");
const closeModalEl = document.querySelector(".modal-close");

openModalEl.addEventListener("click", () => {
  modalBackdropEl.classList.remove("hidden-modal");
});

closeModalEl.addEventListener("click", () => {
  modalBackdropEl.classList.add("hidden-modal");
});

modalBackdropEl.addEventListener("click", () => {
  modalBackdropEl.classList.add("hidden-modal");
});

// second

const radioEl = document.querySelectorAll(".color");

radioEl.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioEl.forEach((radio) => {
      if (radio.checked) {
        document.body.style.backgroundColor = radio.value;
      }
    });
  });
});

// third

const inputEL = document.querySelector(".name-input");
const outputEl = document.querySelector(".name-output");

inputEL.addEventListener("input", (e) => {
  outputEl.textContent = e.target.value;
});

// fourth

const validationInputEl = document.querySelector(
  '.validation-input[data-length="6"]'
);

validationInputEl.addEventListener("change", (e) => {
if(e.target.value.length === Number(validationInputEl.dataset.length)) { 
  validationInputEl.classList.add('valid')
  validationInputEl.classList.remove('invalid')
} else { 
  validationInputEl.classList.add('invalid')
  validationInputEl.classList.remove('valid')
}
});


// last

const fontSizeControlEl = document.querySelector(".font-size-control");
const textSizeControlEl = document.querySelector(".text");

fontSizeControlEl.addEventListener("input", (e) => {
  textSizeControlEl.style.fontSize = e.target.value + 'px';
});
