import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

const images = galleryItems.map((item) => {
  return `<li>
             <a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
             </a>
          </li>`;
});

gallery.insertAdjacentHTML(`beforeend`, images.join(""));

const lightbox = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
