
const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__message--loading'
},
true);

const formValidation = () => {
  const isValid = pristine.validate();
  console.log(pristine.validate())

  if (isValid) {
    console.log('Форма отправлена')
    // const formData = new FormData(evt.target);

    // fetch(
    //   'https://27.javascript.pages.academy/kekstagram-simple/data',
    //   {
    //     method: 'POST',
    //     body: formData,
    //   },
    // );
  }
  else {
    console.log('Форма не отправлена')
  }
};

export {pristine, formValidation};
