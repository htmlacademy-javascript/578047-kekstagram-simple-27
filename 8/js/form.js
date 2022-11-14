import { filterChange } from './filter.js';
import { resetScale, addScale } from './scale.js';
import { isEscapeKey } from './util.js';
import { pristine } from './form-validation.js';
import { sendData } from './api.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const userForm = document.querySelector('.img-upload__form');
const overlay = userForm.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeBtn = userForm.querySelector('.img-upload__cancel');
const imgPreview = document.querySelector('.img-upload__preview img');
const submitButton = document.querySelector('.img-upload__submit');

const resetForm = () => {
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  userForm.reset();
  pristine.reset();
  uploadFile.value = '';
  resetScale();
};

const loadForm = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addScale();
  filterChange();
  document.addEventListener('keydown', onEscKeydown);
  closeBtn.addEventListener('click', onModalCloseClick);
};

const closeForm = () => {
  resetForm();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  closeBtn.removeEventListener('click', onModalCloseClick);
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

function onUploadButtonClick(evt) {
  evt.preventDefault();
  loadForm();
}

function onModalCloseClick() {
  closeForm();
}

uploadFile.addEventListener('change', onUploadButtonClick);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        },
        new FormData(evt.target),
      );
    }
  });
};

setUserFormSubmit(closeForm);
