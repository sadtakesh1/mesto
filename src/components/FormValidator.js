export default class FormValidator {
  constructor(dataSelectors, form){
    this._formEl = form;
    
    this._inputSel = dataSelectors.formInput;
    this._inputInvalidSel = dataSelectors.formInputInvalid;
    this._submitButtonSel = dataSelectors.formSubmit;
    this._submitButtonDisabledSel = dataSelectors.formSubmitDisabled;
    this._errorActiveSel = dataSelectors.formErrorActive;
  }

  enableValidation() {
    this._inputList = Array.from(this._formEl.querySelectorAll(`.${this._inputSel}`));
    this._submitButton = this._formEl.querySelector(`.${this._submitButtonSel}`);
    this._setEventListeners();

  }

  _showInputError(inputElement) {
    const errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputInvalidSel);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorActiveSel);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputInvalidSel);
    errorElement.classList.remove(this._errorActiveSel);
    errorElement.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }


  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disabledSubmitButton();
    }
    else {
      this.enableSubmitButton();
    };
  }

  _checkInputValidity(input) {
    if(!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    }); 
  }

  enableSubmitButton() {
    this._submitButton.classList.remove(this._submitButtonDisabledSel);
    this._submitButton.removeAttribute('disabled');
  }

  disabledSubmitButton() {
    this._submitButton.classList.add(this._submitButtonDisabledSel);
    this._submitButton.setAttribute('disabled', true);
  }
}