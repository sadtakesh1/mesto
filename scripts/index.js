const openPopupButtonEl = document.querySelector('.profile__edit-button');
const closePopupButtonEl = document.querySelector('.popup__close-button');

const editPopupEl = document.querySelector('.popup');
const pageTitleEl = document.querySelector('.profile__name');
const pageAboutEl = document.querySelector('.profile__about');
const nameInputEl = document.querySelector('.popup__input_user_name');
const nameAboutEl = document.querySelector('.popup__input_user_about');
const editFormEl = document.querySelector('.popup__form');

/**addPopup */
const openPopupAddButtonEl = document.querySelector('.profile__add-button');
const closePopupAddButtonEl = document.querySelector('.popup__close-button_add');

const addPopupEl = document.querySelector('.popup_add');
const placeInputEl = document.querySelector('.popup__input_place_name');
const sourceInputEl = document.querySelector('.popup__input_place_source');
const placeNameInputEl = document.querySelector('.popup__input_place_name');
const placeSourceInputEl = document.querySelector('.popup__input_place_source');
const addFormEl = document.querySelector('.popup__form_add');

openPopupAddButtonEl.addEventListener('click', function () {
  openPopup(addPopupEl);

});

closePopupAddButtonEl.addEventListener('click', function () {
  closePopup(addPopupEl);
});

addFormEl.addEventListener('submit', createNewCard);

function createNewCard (event) {
  event.preventDefault();
  const placeNameEl = placeNameInputEl.value;
  const placeSourceEl = placeSourceInputEl.value;
  const newElements = createElementsItem(placeNameEl, placeSourceEl);
  elementsContainer.prepend(newElements);
  addFormEl.reset();
  closePopup(addPopupEl);
}



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

const elementsTemplate = document.querySelector('.elements__group-template');
const elementsTemplateContent = elementsTemplate.content;
const elementsGroupItems = elementsTemplateContent.querySelector('.elements__group');
const elementsContainer = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (item) {
  const newElementsGroupItems = createElementsItem(item.name, item.link);
  elementsContainer.prepend(newElementsGroupItems);
});


const popupImage = document.querySelector('.popup_image');
const popupTitleImage = popupImage.querySelector('.popup__title-image');
const popupElementsImage = popupImage.querySelector('.popup__elements-item');
const popupCloseButtonImage = popupImage.querySelector('.popup__close-button_image');



function createElementsItem (name, link) {
  const newElementsGroupItems = elementsGroupItems.cloneNode(true);
  
  const deletePopupButtonEl = newElementsGroupItems.querySelector('.elements__delete-button');
  deletePopupButtonEl.addEventListener('click', function () {
    deletePopupButtonEl.closest('.elements__group').remove();
  })
  
  const elementText = newElementsGroupItems.querySelector('.elements__text'); 
  elementText.textContent = name;
  
  const elementSource = newElementsGroupItems.querySelector('.elements__item');
  elementSource.src = link;

  const elementReactionEl = newElementsGroupItems.querySelector('.elements__reaction-button');
  
  elementReactionEl.addEventListener('click', function () {
  elementReactionEl.classList.toggle('elements__reaction-button_active');
});

  const elementsImageEl = newElementsGroupItems.querySelector('.elements__item');
  elementsImageEl.addEventListener('click', function () {
    popupTitleImage.textContent = elementText.textContent;
    popupElementsImage.src = elementSource.src;
    openPopup(popupImage);
  })

 
  return newElementsGroupItems;
};

popupCloseButtonImage.addEventListener('click', () => closePopup(popupImage));