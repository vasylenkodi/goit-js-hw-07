// import SimpleLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.12.1/simple-lightbox.esm.min.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElement = document.querySelector(".gallery");  // создает переменную с галереей 


// ------------------------СОЗДАНИЕ И РЕНДЕР РАЗМЕТКИ------------------------



const galleryPreviewImagesToCreate = galleryItems.map((galleryItem) => {  // создает превьюшки в галерее
  const galleryItemElement = document.createElement("li");  // создает теги ли, линк и картинку
  const galleryLinkElement = document.createElement("a");
  const newImageTag = document.createElement("img");

  galleryLinkElement.classList.add("gallery__item");  // добавляет класс для линка
  galleryLinkElement.href = galleryItem.original;

  addAttributesToPreviewImages(newImageTag, galleryItem);  // добавляет аттрибуты на картинку

  galleryItemElement.prepend(galleryLinkElement);  // добавляет ранее созданный линк в ранее созданный ли
  galleryLinkElement.prepend(newImageTag);  // добавляет ранее созданную картинку в линк

  return galleryItemElement;
});

galleryElement.prepend(...galleryPreviewImagesToCreate);  // добавляет все элементы в разметку



// ---------------------СОЗДАНИЕ ЛАЙТБОКСА--------------------------



const lightbox = new SimpleLightbox('.gallery .gallery__item', {  // добавляет лайтбокс на галерею
    captionsData: 'alt',
    captionDelay: 250,
});


// ----------------------ФУНКЦИИ------------------------


function addAttributesToPreviewImages(newImageTag, galleryItem) {
  // добавляет аттрибуты для первьюшек
  newImageTag.src = galleryItem.preview;
  newImageTag.alt = galleryItem.description;
  newImageTag.classList.add("gallery__image");
}

console.log(galleryItems);
