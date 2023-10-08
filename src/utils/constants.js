const editPopup = document.querySelector(".popup_type_profile-edit");
const buttonSubmitPopupProfile = editPopup.querySelector(".popup__save-button");
const editButton = document.querySelector(".profile__edit-button");
const editForm = editPopup.querySelector(".popup__form");
const userName = editPopup.querySelector(".popup__input_user-name");
const userAbout = editPopup.querySelector(".popup__input_about-user");
const addPopup = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__add-button");
const addForm = addPopup.querySelector(".popup__form");
const buttonSubmitPopupCard = addForm.querySelector(".popup__save-button");
const buttonOpenEditAvatarPopup = document.querySelector('.profile__avatar-overlay');
const popupEditFormAvatar = document.querySelector('.popup__form_edit-avatar');
const buttonSubmitPopupAvatar = popupEditFormAvatar.querySelector('.popup__save-button');

export const classesForValidation = {
  formInput: "popup__input",
  formInputInvalid: "popup__input_invalid",
  formSubmit: "popup__save-button",
  formSubmitDisabled: "popup__save-button_disabled",
  formErrorActive: "popup__error_active",
};

export {
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
};