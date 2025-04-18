import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.elements['search-text'].value;
  clearGallery();
  if (query === '') { 
      iziToast.error({
          title: 'Error',
          message: 'Please enter search parameters!',});
    return;
  }
  showLoader();
  const data = getImagesByQuery(query);
  data.then(response => {
    if (response.hits.length === 0) {
        iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(response.hits);
  }).catch(() => {
      iziToast.error();
  })
    .finally(() => {
      hideLoader();
    });
  form.reset();
});