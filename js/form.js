import './form-validation.js';
import { filterChange } from './filter.js';
import { scalePicture, startScaleValues } from './scale.js';
import { isEscapeKey } from './util.js';

const userForm = document.querySelector('.img-upload__form');
const overlay = userForm.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeBtn = userForm.querySelector('.img-upload__cancel');
const imgPreview = document.querySelector('.img-upload__preview img');

const resetForm = () => {
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  startScaleValues();
};

const loadForm = () => {
  uploadFile.value = '';
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetForm();
  scalePicture();
  filterChange();
  document.addEventListener('keydown', onEscKeydown);
  closeBtn.addEventListener('click', onModalCloseClick);
};

const closeForm = () => {
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
