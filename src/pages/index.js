import "../pages/index.css"; // добавьте импорт главного файла стилей
import Card from "../components/Card.js";
import { initialCards } from "../components/initialCards.js";
import Validation from "../components/Validation.js";
import Section from "../components/Section";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";

const popupList = document.querySelectorAll(".popup");
/*imagePopup*/
const imagePopup = document.querySelector(".popup_type_full-image");
const imagePopupTitle = imagePopup.querySelector(".popup__title_image");
const imagePopupPicture = imagePopup.querySelector(".popup__image");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close-button");
/*editForm*/
const editPopup = document.querySelector(".popup_type_profile-edit");
const editButton = document.querySelector(".profile__edit-button");
const editForm = editPopup.querySelector(".popup__form");
const editFormSaveButton = editForm.querySelector(".popup__save-button");
const editPopupCloseButton = editPopup.querySelector(".popup__close-button");
const userName = editPopup.querySelector(".popup__input_user-name");
const userAbout = editPopup.querySelector(".popup__input_about-user");
const defaultUserName = document.querySelector(".profile__title");
const defaultUserInfo = document.querySelector(".profile__subtitle");
/*addForm*/
const addPopup = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__add-button");
const addForm = addPopup.querySelector(".popup__form");
const addFormSaveButton = addForm.querySelector(".popup__save-button");
const addPopupCloseButton = addPopup.querySelector(".popup__close-button");
const placeName = addPopup.querySelector(".popup__input_place_name");
const placeImage = addPopup.querySelector(".popup__input_place_image");
/*Контейнер для карточек*/
//const cardsContainer = document.querySelector(".cards");
/*Обьект с классами для валидации*/
const classesForValidation = {
  formInput: "popup__input",
  formInputInvalid: "popup__input_invalid",
  formSubmit: "popup__save-button",
  formSubmitDisabled: "popup__save-button_disabled",
  formErrorActive: "popup__error_active",
};

/*Загрузка data с уже добавленными местами*/

const cardsContainer = new Section(
  {
    renderer: (item) => {
      const card = createCard(item, ".card-template", openImagePopup);
      cardsContainer.addItem(card);
    },
  },
  ".cards"
);

cardsContainer.renderItems(initialCards);

/*Генерирует новую карточку*/
function createCard(data, templateSelector, openImagePopup) {
  const card = new Card(data, templateSelector, openImagePopup);
  return card.generateCard();
}

const popupShowFullImage = new PopupWithImage(".popup_type_full-image");

popupShowFullImage.setEventListeners();

function openImagePopup(name, link) {
  popupShowFullImage.open(name, link);
}

const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

const popupProfileEdit = new PopupWithForm(
  ".popup_type_profile-edit",
  changeProfileInfo
);

popupProfileEdit.setEventListeners();

editButton.addEventListener("click", openProfilePopup);

function openProfilePopup() {
  const userData = userInfo.getUserInfo();

  userName.value = userData.userName;
  userAbout.value = userData.aboutUser;

  editPopupForm.enableSubmitButton();
  popupProfileEdit.open();
}

/*Редактирование информации профиля для ивент сабмита editForm*/
function changeProfileInfo(inputValues) {
  userInfo.setUserInfo(inputValues);

  popupProfileEdit.close();
}

const popupAddCard = new PopupWithForm(".popup_type_add-card", createNewCard);

popupAddCard.setEventListeners();

addButton.addEventListener("click", openCardPopup);

function openCardPopup() {
  addPopupForm.disabledSubmitButton();
  popupAddCard.open();
}

/*Создание новой карточки для ивент сабмита addForm*/
function createNewCard(inputValues) {
  const newCard = createCard(inputValues, ".card-template", openImagePopup);
  cardsContainer.addItem(newCard);

  popupAddCard.close();

  addPopupForm.disabledSubmitButton();
  addForm.reset();
}

const editPopupForm = new Validation(classesForValidation, editForm);

editPopupForm.enableValidation();

const addPopupForm = new Validation(classesForValidation, addForm);

addPopupForm.enableValidation();
