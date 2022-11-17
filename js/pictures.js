const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const createPicture = ({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  return pictureElement;
};

export const renderPictures = (pictures) => {
  const listFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    listFragment.appendChild(createPicture(picture));
  });
  picturesContainer.appendChild(listFragment);
};
