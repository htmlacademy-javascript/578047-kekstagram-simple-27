const userForm = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview img');

let scaleValue = 100;
const scaleControlValue = userForm.querySelector('.scale__control--value');

const onBtnBiggerClick = () => {
  if (scaleValue < 100) {
    scaleValue += 25;
    scaleControlValue.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

const onBtnLowerClick = () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
    scaleControlValue.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

export const scalePicture = () => {
  const scaleButtonBigger = userForm.querySelector('.scale__control--bigger');
  const scaleButtonSmaller = userForm.querySelector('.scale__control--smaller');
  scaleButtonBigger.addEventListener('click', onBtnBiggerClick);
  scaleButtonSmaller.addEventListener('click', onBtnLowerClick);
};

export const startScaleValues = () => {
  scaleControlValue.value = '100%';
  scaleValue = 100;
};

