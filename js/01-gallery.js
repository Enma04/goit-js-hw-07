import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach( item => {
    let li = document.createElement("li");
    gallery.append(li);

    let img = document.createElement("img");
    img.src = item.preview;
    li.append(img);
});

console.log(galleryItems);
