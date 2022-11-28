import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

function createMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
            <a class="gallery__item" href="${item.original}">
                <img class="gallery__image"
                    src="${item.preview}" 
                    alt="${item.description}" 
                />
            </a>
        </div>`
    )
    .join("");
}

galleryList.innerHTML = createMarkup(galleryItems);
console.log(createMarkup(galleryItems));

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
