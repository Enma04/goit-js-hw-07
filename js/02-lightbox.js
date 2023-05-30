import { galleryItems } from './gallery-items.js';
// Change code below this line


//--------------------------------------------------------------------------------
//------------------------ VARIABLES ---------------------------------------------

const galleryList = document.querySelector(".gallery");

const galleryHTML = galleryItems.map( (element) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img class="gallery__image" src=" ${element.preview} " alt="${element.description}" />
        </a>
    </li>`).join("");

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDealy: 250,
});


//--------------------------------------------------------------------------------
//------------------------ FUNCIONES ---------------------------------------------

function imgSelected(event) {

    event.preventDefault();

    if(event.target.nodeName !== "IMG") {
        console.log("No es una imágen!");
        return;
    }
    else {
        lightbox.on('show.simplelightbox', function (event) {
            event.open();
            console.log("Estoy en el lightbox");
        });
    }
}


//--------------------------------------------------------------------------------
//------------------- IMPLEMENTACION ---------------------------------------------

galleryList.insertAdjacentHTML('afterbegin', galleryHTML);

galleryList.addEventListener("click", imgSelected);
