// import { modalSearchElement } from './constants';
const modalSearchElement = document.querySelector('.search-modal');
const closeModalButtonElement = modalSearchElement.querySelector('.search-modal__close-button');
const modalSearchFormElement = modalSearchElement.querySelector('.search-form');
const searchButtonElement = document.querySelector('.header__search-button');
const searchInputElement = document.querySelector('.search-form__input');

// Используется keyCode, так как шрифты/раскладки безразличны.
const ESC_KEY_CODE = 27;


const openSearchModal = () => {
  document.addEventListener('keydown', handleEscClose);
  modalSearchElement.classList.add('search-modal_opened');
  modalSearchElement.classList.add('search-modal_shown');
  setTimeout(() => {
     modalSearchFormElement.classList.add('search-form_shown');
  }, 700);
};
const closeSearchModal = () => {
  document.removeEventListener('keydown', handleEscClose);
  modalSearchFormElement.classList.remove('search-form_shown');
  setTimeout(() => {
    modalSearchElement.classList.remove('search-modal_shown');
    setTimeout(() => {
      modalSearchElement.classList.remove('search-modal_opened');
    },700)
  }, 300);
};

const handleOpenSearchButtonClick = () => {
  openSearchModal();
};

const handleCloseSearchModalClick = () => {
  closeSearchModal();
}

const handleOverlayClickClose = (evt) => {
 if (evt.target === evt.currentTarget) {
  closeSearchModal();
 };
}
function handleEscClose(evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
 closeSearchModal();
    }

  }
  const handleSearchInput = (evt) => {
    const { target: { value } } = evt;
    console.log(`Input value: "${value}".`);
   };

  searchButtonElement.addEventListener('click', handleOpenSearchButtonClick);
  modalSearchElement.addEventListener('click', handleOverlayClickClose);
  closeModalButtonElement.addEventListener('click', handleCloseSearchModalClick);
  searchInputElement.addEventListener('input', handleSearchInput);
