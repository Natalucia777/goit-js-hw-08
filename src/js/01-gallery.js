import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContent = document.querySelector('ul.gallery');
galleryContent.style.listStyle = 'none';
function markup(items) {
  return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}">
              <img class="gallery__img" src="${preview}" data-source="${original}" 
              alt="${description}" /></a></li>`; }).join('');}
galleryContent.innerHTML = markup(galleryItems);
var lightbox = new SimpleLightbox('.gallery a',  {
    overlayOpacity: 0.3, captionSelector: "img", captionType: "attr",
    captionDelay: 250, captionsData: "alt", captionClass: 'captionstyle' });