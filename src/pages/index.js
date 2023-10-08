import {
  editPopup,
  buttonSubmitPopupProfile,
  editButton,
  editForm,
  userName,
  userAbout,
  addPopup,
  addButton,
  addForm,
  buttonSubmitPopupCard,
  buttonOpenEditAvatarPopup,
  popupEditFormAvatar,
  buttonSubmitPopupAvatar
} from "../utils/constants.js"

import Api from "../components/Api";
import "../pages/index.css"; // добавьте импорт главного файла стилей
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage";
import { classesForValidation } from "../utils/constants";
import PopupDeleteCard from "../components/PopupDeleteCard";




const apiData = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    authorization: 'cfd1682a-c5ee-4232-81e5-cb06cea967fd',
    'Content-Type': 'application/json'
  }
}

const api = new Api(apiData);

const cardsContainer = new Section(
  {
    renderer: (item) => {
      const card = createCard(userId, item, ".card-template", openImagePopup, handleDeleteCard, handleLikeClick);
      cardsContainer.appendItem(card);
    },
  },
  ".cards"
);

let userId;

Promise.all([api.getDataCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;

    userInfo.setUserInfo(userData);
    cardsContainer.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

const popupEditAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  editAvatar
);
popupEditAvatar.setEventListeners();

function editAvatar({ link }) {
  buttonSubmitPopupAvatar.textContent = "Сохранение...";
  api
    .changeAvatar(link)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupEditAvatar.close();
      editAvatarPopupForm.disableSubmitButton();
      
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      buttonSubmitPopupAvatar.textContent = "Сохранить";
    });
}

buttonOpenEditAvatarPopup.addEventListener('click', () => {
  popupEditAvatar.open();
});


const popupDeleteCard = new PopupDeleteCard(
  ".popup_type_delete-card",
  deleteCard
);
popupDeleteCard.setEventListeners();

function handleLikeClick(card) {
  console.log(card.getId());
  if (card.didUserPutLike()) {
    api
      .removeLike(card.getId())
      .then((res) => {
        card.changeLikesArray(res.likes);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
     api
     .putLike(card.getId())
     .then((res) => {
      card.changeLikesArray(res.likes);
     })
     .catch((err) => {
      console.error(err);
    });
  }
}

function handleDeleteCard(card) {
  popupDeleteCard.open();

  popupDeleteCard.setCard(card);
}

function deleteCard(card) {
  api
    .deleteCard(card.id)
    .then(() => {
      card.deleteCard();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.error(err);
    });
}



/*Генерирует новую карточку*/
function createCard(userId, data, templateSelector, openImagePopup, handleDeleteCard, handleLikeClick) {
  const card = new Card(userId, data, templateSelector, openImagePopup, handleDeleteCard, handleLikeClick);
  return card.generateCard();
}

const popupShowFullImage = new PopupWithImage(".popup_type_full-image");

popupShowFullImage.setEventListeners();

function openImagePopup(name, link) {
  popupShowFullImage.open(name, link);
}

const userInfo = new UserInfo(".profile__title", ".profile__subtitle", ".profile__avatar");

const popupProfileEdit = new PopupWithForm(
  ".popup_type_profile-edit",
  changeProfileInfo
);

popupProfileEdit.setEventListeners();

editButton.addEventListener("click", openProfilePopup);

function openProfilePopup() {
  const userData = userInfo.getUserInfo();

  userName.value = userData.userNameSelector;
  userAbout.value = userData.aboutUserSelector;

  editPopupForm.enableSubmitButton();
  popupProfileEdit.open();
}

/*Редактирование информации профиля для ивент сабмита editForm*/
function changeProfileInfo(inputValues) {
  buttonSubmitPopupProfile.textContent = "Сохранение...";
  api.editUserProfile(inputValues)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupProfileEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSubmitPopupProfile.textContent = "Сохранить";
    });
}

const popupAddCard = new PopupWithForm(".popup_type_add-card", createNewCard);

popupAddCard.setEventListeners();

addButton.addEventListener("click", openCardPopup);

function openCardPopup() {
  addPopupForm.disableSubmitButton();
  popupAddCard.open();
}



/*Создание новой карточки для ивент сабмита addForm*/
function createNewCard(inputValues) {
  buttonSubmitPopupCard.textContent = "Создание...";
  api.addNewCard(inputValues).then((res) => {
    const newCard = createCard(userId, res, ".card-template", openImagePopup, handleDeleteCard, handleLikeClick);
    cardsContainer.prependItem(newCard);
    popupAddCard.close();
    addPopupForm.disableSubmitButton();
  })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      buttonSubmitPopupCard.textContent = "Создать";
    });
}

const editPopupForm = new FormValidator(classesForValidation, editForm);

editPopupForm.enableValidation();

const addPopupForm = new FormValidator(classesForValidation, addForm);

addPopupForm.enableValidation();

const editAvatarPopupForm = new FormValidator(classesForValidation, popupEditFormAvatar);

editAvatarPopupForm.enableValidation();