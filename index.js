const openPopupButtonEl = document.querySelector('#open-profile-button');
const closePopupButtonEl = document.querySelector('#close-popup-button');

const editPopupEl = document.querySelector('.popup');
const pageTitleEl = document.querySelector('.profile__name');
const pageAboutEl = document.querySelector('.profile__about');
const nameInputEl = document.querySelector('#name-input');
const nameAboutEl = document.querySelector('#name-input-second');
const editFormEl = document.querySelector('#edit-form');

openPopupButtonEl.addEventListener('click', function () {
  openPopup(editPopupEl);
  nameInputEl.value = pageTitleEl.textContent;
  nameAboutEl.value = pageAboutEl.textContent;
});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(editPopupEl);
});

editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTitleEl.textContent = nameInputEl.value;

    pageAboutEl.textContent = nameAboutEl.value;

  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_is-opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_is-opened');
}