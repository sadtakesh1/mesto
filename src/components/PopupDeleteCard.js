import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, deleteCard) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._deleteCard = deleteCard;
    }

    setCard(card) {
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._deleteCard(this._card);
        })
    }
}