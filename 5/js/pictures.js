import { createPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const listFragment = document.createDocumentFragment();
const pictures = createPhotos();
pictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  listFragment.appendChild(pictureElement);
});
picturesContainer.appendChild(listFragment);

