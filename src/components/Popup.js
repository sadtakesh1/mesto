export default class Popup {
  /**отвечает за открытие и закрытие попапа */
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  open() {
    /**открытие попапа */
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    /**закрытие попапа */
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    /**содержит логику закрытия попапа клавишей ESC */
    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClose(event) {
    if (event.target === this._popup) {
      this.close();
    }
  }

  setEventListeners() {
    /**добавляет слушатель клика иконке закрытия и модальное окно также закрывается */
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("mousedown", this._handleOverlayClose);
  }
}
