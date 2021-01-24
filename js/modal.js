"use strict"
document.addEventListener('DOMContentLoaded', function () {

  let failure = document.querySelector('.modal-failure');
  let success = document.querySelector('.modal-success');
  let form = document.querySelector('.form');
  let inputsReq = form.querySelectorAll('.req');
  let buttonsClose = document.querySelectorAll('.modal-body__button-close');


  form.addEventListener('submit', formSend);

  function formSend(e) {
    e.preventDefault();

    for (let inputReq of inputsReq) {
      formRemoveError(inputReq);
      if (inputReq.value === '') {
        formAddError(inputReq);
        failure.classList.add('modal-open');
      } else {
        formRemoveError(inputReq);
        success.classList.add('modal-open');
        inputReq.value = '';
      }
    }

  }

  function formAddError(inputReq) {
    inputReq.classList.add('form__input--error');
  }

  function formRemoveError(inputReq) {
    inputReq.classList.remove('form__input--error');
  }

  if (buttonsClose.length > 0) {
    for (let buttonClose of buttonsClose) {
      buttonClose.addEventListener('click', function () {
        success.classList.remove('modal-open');
        failure.classList.remove('modal-open');
      })
    }
  }

});
