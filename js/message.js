import { isEscapeKey } from './util.js';

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

export const showMessage = (message, button) => {
  activeMessage = message;
  document.body.append(message);
  button.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageCloseKeydown, true);
  document.addEventListener('click', onMessageCloseClick);
};
