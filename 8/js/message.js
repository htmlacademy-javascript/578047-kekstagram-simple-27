import { isEscapeKey } from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const successButton = successMessage.querySelector('.success__button');
const errorButton = errorMessage.querySelector('.error__button');

let activeMessage;

const onMessageCloseKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopImmediatePropagation();
    closeMessage();
  }
};

const onMessageCloseClick = (evt) => {
  if (evt.target === activeMessage) {
    closeMessage();
  }
};

function closeMessage() {
  activeMessage.remove();
  document.removeEventListener('keydown', onMessageCloseKeydown, true);
  document.removeEventListener('click',onMessageCloseClick);
}

export const showSuccessMessage = () => {
  activeMessage = successMessage;
  document.body.append(successMessage);
  successButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageCloseKeydown, true);
  document.addEventListener('click', onMessageCloseClick);
};


export const showErrorMessage = () => {
  activeMessage = errorMessage;
  document.body.append(errorMessage);
  errorButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageCloseKeydown, true);
  document.addEventListener('click', onMessageCloseClick);
};
