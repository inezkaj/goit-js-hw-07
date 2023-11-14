// import("./gallery-items.js");
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const lightbox = basicLightbox
    .create(
      `<img src="${event.target.dataset.source}" width="1800" height="1600" />`
    )
    .show((lightboxInstance) => {
      document.addEventListener("keydown", (key_event) => {
        if (key_event.key == "Escape") {
          lightboxInstance.close();
        }
      });
    });
});

const images = galleryItems.map((item) => {
  return `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
     </div>`;
});

gallery.insertAdjacentHTML(`beforeend`, images.join(""));
