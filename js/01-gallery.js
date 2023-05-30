import { galleryItems } from './gallery-items.js';
// Change code below this line



//--------------------------------------------------------------------------------
//------------------- DEFINICIONES ---------------------------------------------

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

function imgSelected(event) {

    event.preventDefault();
    console.log(event);

    if(event.target.nodeName !== "IMG") {
        console.log("No es una imágen!");
        return;
    }
    else {

        const instance = basicLightbox.create(`
            <div class="modal">
                <p>
                    <img src="${event.target.attributes.src.value}" width="800" height="600">
                </p>
            </div>
        `);

        instance.show();
    }
}



//--------------------------------------------------------------------------------
//------------------- IMPLEMENTACION ---------------------------------------------

galleryList.insertAdjacentHTML('afterbegin', galleryHTML);

galleryList.addEventListener("click", imgSelected);
