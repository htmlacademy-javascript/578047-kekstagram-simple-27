import { getData } from './api.js';
import { renderPictures } from './pictures.js';
import { showAlert } from './util.js';

getData((pictures) => {
  renderPictures(pictures);
}, showAlert);
