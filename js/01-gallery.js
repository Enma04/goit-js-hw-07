import { galleryItems } from './gallery-items.js';
// Change code below this line

import * as basicLightbox from 'basicLightbox.min.js';

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

const galleryList = document.querySelector(".gallery");
const galleryHTML = galleryItems.map( (element) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
                class="gallery__image"
                src="${element.preview}"
                data-source="large-image.jpg"
                alt="${element.description}"
            />
        </a>
    </li>`).join("");

console.log(galleryHTML);
galleryList.insertAdjacentHTML('afterbegin', galleryHTML);

let ligthBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

