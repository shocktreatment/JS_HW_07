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
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`
    )
    .join("");
}
console.log(createMarkup(galleryItems));

galleryList.innerHTML = createMarkup(galleryItems);
galleryList.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);

  instance.show();

  galleryList.addEventListener("keydown", closeImg);

  function closeImg(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
