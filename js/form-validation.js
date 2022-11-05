const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__message--loading'
});

const formValidation = () => {
  const isValid = pristine.validate();

  if (isValid) {
    // console.log('Форма отправлена')
  }
  else {
    // console.log('Форма не отправлена')
  }
};

export {pristine, formValidation};
