import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join("");

}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

gallery.addEventListener('click', handlerGalleryItemClick)

function handlerGalleryItemClick(evt){
    evt.preventDefault();
    if(evt.target === evt.currentTarget) {
        return
    }
    

const currentItem = evt.target
const {source} = currentItem.dataset
const image = galleryItems.find(({original}) => original === source)

const instance = basicLightbox.create(`
    <img src="${image.original}" width="800" height="600">`)

     instance.show()
};


console.log(galleryItems);

console.log(galleryItems);
