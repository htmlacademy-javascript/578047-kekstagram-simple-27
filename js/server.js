import { renderPictures } from './pictures.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((pictures) => {
    renderPictures(pictures);
    // console.log(pictures);
  });

