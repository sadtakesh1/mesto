import Card from './Card.js'
import { initialCards } from './initialCards.js';


const popupList = document.querySelectorAll('.popup');
/*imagePopup*/
const imagePopup = document.querySelector('.popup_type_full-image')
const imagePopupTitle = imagePopup.querySelector('.popup__title_image');
const imagePopupPicture = imagePopup.querySelector('.popup__image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
/*editForm*/
const editPopup = document.querySelector('.popup_type_profile-edit');
const editButton = document.querySelector('.profile__edit-button');
const editForm = editPopup.querySelector('.popup__form');
const editFormSaveButton = editForm.querySelector('.popup__save-button');
const editPopupCloseButton = editPopup.querySelector('.popup__close-button');
const userName = editPopup.querySelector('.popup__input_user-name');
const userInfo = editPopup.querySelector('.popup__input_about-user');
const defaultUserName = document.querySelector('.profile__title');
const defaultUserInfo = document.querySelector('.profile__subtitle');
/*addForm*/
const addPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.profile__add-button');
const addForm = addPopup.querySelector('.popup__form');
const addFormSaveButton = addForm.querySelector('.popup__save-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close-button');
const placeName = addPopup.querySelector('.popup__input_place_name');
const placeImage = addPopup.querySelector('.popup__input_place_image');
/*Контейнер для карточек*/
const cardsContainer = document.querySelector('.cards');
/*Обьект с классами для валидации*/
const classesForValidation = {
  formInput: 'popup__input',
  formInputInvalid: 'popup__input_invalid',
  formSubmit: 'popup__save-button',
  formSubmitDisabled: 'popup__save-button_disabled',
  formErrorActive: 'popup__error_active'
};

/*Загрузка data с уже добавленными местами*/
initialCards.forEach((item) => {
  const newCard = createCard(item, '.card-template', openImagePopup)

  cardsContainer.prepend(newCard);
});

/*Генерирует новую карточку*/
function createCard(data, templateSelector, openImagePopup) {
  const card = new Card(data, templateSelector, openImagePopup);
  return card.generateCard();
}

/*Редактирование информации профиля для ивент сабмита editForm*/
function changeProfileInfo(form) {
  form.preventDefault();
  defaultUserName.textContent = userName.value;
  defaultUserInfo.textContent = userInfo.value;
  closePopup(editPopup);
};

/*Создание новой карточки для ивент сабмита addForm*/
function createNewCard(form) {
  form.preventDefault();

  const data = {
    name: placeName.value,
    link: placeImage.value
  };

  const newCard = createCard(data, '.card-template', openImagePopup);
  cardsContainer.prepend(newCard);

  closePopup(addPopup);
  addForm.reset();
};

/*Закрытие попапа нажатием ESC*/
function closePopupByEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};



popupList.forEach(popup => {
  /*Закрытие попапа кликом по оверлею*/
  popup.addEventListener('mousedown', event => {
    if (event.target === popup) {
      closePopup(popup);
    };
  });
});

editButton.addEventListener('click', () => openProfilePopup(editPopup));

editPopupCloseButton.addEventListener('click', () => closePopup(editPopup));

addButton.addEventListener('click', () => openPopup(addPopup));

addPopupCloseButton.addEventListener('click', () => closePopup(addPopup));

imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

/*Вещаем на ивент сабмита редактирование профиля*/
editForm.addEventListener('submit', changeProfileInfo);

/*Вещаем на ивент сабмита создание новой карточки*/
addForm.addEventListener('submit', createNewCard);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
};

function openProfilePopup(popup) {
  userName.value = defaultUserName.textContent; 
  userInfo.value = defaultUserInfo.textContent;

  openPopup(popup);
};

export function openImagePopup(name, link) {
  imagePopupTitle.textContent = name;
  imagePopupPicture.src = link;

  openPopup(imagePopup);
}