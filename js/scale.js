const userForm = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview img');
const scaleControlValue = userForm.querySelector('.scale__control--value');
const scaleButtonBigger = userForm.querySelector('.scale__control--bigger');
const scaleButtonSmaller = userForm.querySelector('.scale__control--smaller');

const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;

const scalePicture = (value = DEFAULT_SCALE) => {
  scaleControlValue.value = `${value}%`;
  imgPreview.style.transform = `scale(${value / 100})`;
};

const onButtonBiggerClick = () => {
  let currentValue = parseInt(scaleControlValue.value, 10);
  if (currentValue < MAX_SCALE) {
    currentValue += SCALE_STEP;
    scalePicture(currentValue);
  }
};

const onButtonLowerClick = () => {
  let currentValue = parseInt(scaleControlValue.value, 10);
  if (currentValue > MIN_SCALE) {
    currentValue -= SCALE_STEP;
    scalePicture(currentValue);
  }
};

export const addScale = () => {
  scaleButtonBigger.addEventListener('click', onButtonBiggerClick);
  scaleButtonSmaller.addEventListener('click', onButtonLowerClick);
};

export const resetScale = () => {
  scalePicture();
};
