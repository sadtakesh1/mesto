const buttonOpenPopupCard = document.querySelector('.profile__edit-button');
const buttonClosePopupCard = document.querySelector('.popup__close-button');

const editPopupEl = document.querySelector('.popup_edit');
const pageTitleEl = document.querySelector('.profile__name');
const pageAboutEl = document.querySelector('.profile__about');
const inputUserName = document.querySelector('.popup__input_user_name');
const inputUserAbout = document.querySelector('.popup__input_user_about');
const formEditEl = document.querySelector('.popup__form');

/**addPopup */
const addButtonOpenPopupCard = document.querySelector('.profile__add-button');
const addButtonClosePopupCard = document.querySelector('.popup__close-button_add');

const addPopupEl = document.querySelector('.popup_add');
const inputPlaceName = document.querySelector('.popup__input_place_name');
const inputPlaceSource = document.querySelector('.popup__input_place_source');
const formAddEl = document.querySelector('.popup__form_add');

addButtonOpenPopupCard.addEventListener('click', function () {
  openPopup(addPopupEl);

});

addButtonClosePopupCard.addEventListener('click', function () {
  closePopup(addPopupEl);
});

formAddEl.addEventListener('submit', createNewCard);

function createNewCard (event) {
  event.preventDefault();
  const placeNameEl = inputPlaceName.value;
  const placeSourceEl = inputPlaceSource.value;
  const newElements = createElementsItem(placeNameEl, placeSourceEl);
  elementsContainer.prepend(newElements);
  formAddEl.reset();
  closePopup(addPopupEl);
}



buttonOpenPopupCard.addEventListener('click', function () {
  openPopup(editPopupEl);
  inputUserName.value = pageTitleEl.textContent;
  inputUserAbout.value = pageAboutEl.textContent;
});

buttonClosePopupCard.addEventListener('click', function () {
  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_opened');
}

formEditEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTitleEl.textContent = inputUserName.value;

    pageAboutEl.textContent = inputUserAbout.value;

  closePopup(editPopupEl);
});

const elementsTemplate = document.querySelector('.elements__group-template');
const elementsTemplateContent = elementsTemplate.content;
const elementsGroupItems = elementsTemplateContent.querySelector('.elements__group');
const elementsContainer = document.querySelector('.elements');


initialCards.forEach(function (item) {
  const newElementsGroupItems = createElementsItem(item.name, item.link);
  elementsContainer.prepend(newElementsGroupItems);
});


const popupImage = document.querySelector('.popup_image');
const popupTitleImage = popupImage.querySelector('.popup__title-image');
const popupElementsImage = popupImage.querySelector('.popup__elements-item');
const buttonClosePopupImage = popupImage.querySelector('.popup__close-button_image');



function createElementsItem (name, link) {
  const newElementsGroupItems = elementsGroupItems.cloneNode(true);
  
  const buttonDeletePopupEl = newElementsGroupItems.querySelector('.elements__delete-button');
  buttonDeletePopupEl.addEventListener('click', function () {
    buttonDeletePopupEl.closest('.elements__group').remove();
  })
  
  const elementText = newElementsGroupItems.querySelector('.elements__text'); 
  elementText.textContent = name;
  
  const elementSource = newElementsGroupItems.querySelector('.elements__item');
  elementSource.src = link;
  elementSource.alt = name;


  const elementReactionEl = newElementsGroupItems.querySelector('.elements__reaction-button');
  
  elementReactionEl.addEventListener('click', function () {
  elementReactionEl.classList.toggle('elements__reaction-button_active');
});

  const elementsImageEl = newElementsGroupItems.querySelector('.elements__item');
  elementsImageEl.addEventListener('click', function () {
    popupTitleImage.textContent = elementText.textContent;
    popupElementsImage.src = elementSource.src;
    popupElementsImage.alt = popupTitleImage.textContent;
    openPopup(popupImage);
  })

 
  return newElementsGroupItems;
};

buttonClosePopupImage.addEventListener('click', () => closePopup(popupImage));