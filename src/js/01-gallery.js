// Add imports above this line
import SimpleLightbox from "simplelightbox";


import { galleryItems } from './gallery-items';
//1, 3
const galleryContent = document.querySelector('ul.gallery');
function markup(items) {
  return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
              <img class="gallery__img" src="${preview}" data-source="${original}" 
              alt="${description}" /></a></li>`; }).join('');}
galleryContent.innerHTML = markup(galleryItems);
//4
galleryContent.addEventListener('click', onGetImage);
function onGetImage(e) { e.preventDefault();
  const { target } = e;
  if (!target.classList.contains('gallery__img')) {
    return;
  }
//5
  const instance = basicLightbox.create(`<img src="${target.dataset.source}"/>`, {
    onShow: () => window.addEventListener('keydown', onEscButton),
    onClose: () => window.removeEventListener('keydown', onEscButton), });
  instance.show();
  function onEscButton(e) {
    if (e.code === 'Escape') { instance.close(); }
  }
}