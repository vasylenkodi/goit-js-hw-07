import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");  // создает переменную с галереей 

const galleryPreviewImagesToCreate = galleryItems.map((galleryItem) => {  // создает превьюшки в галерее
  const galleryItemElement = document.createElement("div");  // создает теги див, линк и картинку
  const galleryLinkElement = document.createElement("a");
  const newImageTag = document.createElement("img");

  galleryItemElement.classList.add("gallery__item");  //добавляет класс для дива

  galleryLinkElement.classList.add("gallery__link");  // добавляет класс для линка
  galleryLinkElement.href = galleryItem.original;

  addAttributesToPreviewImages(newImageTag, galleryItem);  // добавляет аттрибуты на картинку

  galleryItemElement.prepend(galleryLinkElement);  // добавляет ранее созданный линк в ранее созданный див
  galleryLinkElement.prepend(newImageTag);  // добавляет ранее созданную картинку в линк

  return galleryItemElement;
});

galleryElement.prepend(...galleryPreviewImagesToCreate);  // добавляет все элементы в разметку

const onModalOpen = () => {  // функция добавляет слушателя нажатия клавиш на виндов
  window.addEventListener("keydown", onEscKeyPress);
};

const onModalClose = () => {  // снимает слушателя
  window.removeEventListener("keydown", onEscKeyPress);
};

const modalElement = basicLightbox.create("<img>", {  // создает модалку с картинкой
  onShow: onModalOpen,     // при открытии модалки будет вешаться слушатель нажатия клавиши на окно
  onClose: onModalClose,        // при закрытии модалки слушатель будет сниматься
});

galleryElement.addEventListener("click", (event) => {  // добавляет слушателя на галерею
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {  // если клик будет не по картинке функция прервется
    return;
  }

  modalElement.show();  // открывает модалку
  createOriginalImage(event.target);  // добавляет в модалку картинку на которую нажали
});

function onEscKeyPress(event) {  // функция которая закрывает модалку сли была нажата клавиша esc
  if (event.code === "Escape") {
    modalElement.close();
  }
}

function createOriginalImage(el) {  // вешает нужную ссылку и описание на оригинальную картинку
  const originalImg = document.querySelector(".basicLightbox img");
  const previewImg = el;
  originalImg.src = `${previewImg.dataset.source}`;
  originalImg.alt = `${previewImg.alt}`;
}

function addAttributesToPreviewImages(newImageTag, galleryItem) {  // добавляет аттрибуты для первьюшек
  newImageTag.src = galleryItem.preview;
  newImageTag.dataset.source = galleryItem.original;
  newImageTag.alt = galleryItem.description;
  newImageTag.classList.add("gallery__image");
}

console.log(galleryItems);
