const userForm = document.querySelector('.img-upload__form');

export const pristine = new Pristine(userForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description--error'
});
