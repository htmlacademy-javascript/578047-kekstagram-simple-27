const imgPreview = document.querySelector('.img-upload__preview img');
const userForm = document.querySelector('.img-upload__form');

const onFilterChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(`effects__preview--${evt.target.value}`);
  }
};

export const filterChange = () => {
  userForm.addEventListener('click', onFilterChange);
};
