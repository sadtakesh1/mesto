export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    console.log(handleCardClick);
  }

  _getTemplate() {
    return document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
  }

  _setEventListeners() {
    this._newCardDelete.addEventListener('click', () => {  
      this._deleteCard();
    });

    this._newCardLike.addEventListener('click', () => {
      this._handleLikeClick();
    });

    //добавил handleCardClick - как связать, нужно ли менять openImagePopup
    this._newCardImage.addEventListener('click', () => {
      //openImagePopup(this._name, this._link);
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeClick() {
    this._newCardLike.classList.toggle('card__like-button_active');
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  generateCard() {
    this._newCard = this._getTemplate();

    this._newCardImage = this._newCard.querySelector('.card__image');
    this._newCardTitle = this._newCard.querySelector('.card__title');
    this._newCardLike = this._newCard.querySelector('.card__like-button');
    this._newCardDelete = this._newCard.querySelector('.card__delete-button');

    this._setEventListeners();

    this._newCardImage.src = this._link;
    this._newCardImage.alt = this._name;
    this._newCardTitle.textContent = this._name;

    return this._newCard;
  }
}

