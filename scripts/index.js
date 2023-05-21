const openPopupButtonEl = document.querySelector('.profile__edit-button');
const closePopupButtonEl = document.querySelector('.popup__close-button');

const editPopupEl = document.querySelector('.popup');
const pageTitleEl = document.querySelector('.profile__name');
const pageAboutEl = document.querySelector('.profile__about');
const nameInputEl = document.querySelector('.popup__input_user_name');
const nameAboutEl = document.querySelector('.popup__input_user_about');
const editFormEl = document.querySelector('.popup__form');

openPopupButtonEl.addEventListener('click', function () {
  openPopup(editPopupEl);
  nameInputEl.value = pageTitleEl.textContent;
  nameAboutEl.value = pageAboutEl.textContent;
});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_opened');
}

editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTitleEl.textContent = nameInputEl.value;

    pageAboutEl.textContent = nameAboutEl.value;

  closePopup(editPopupEl);
});