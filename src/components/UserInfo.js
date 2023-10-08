export default class UserInfo {
  /**Отвечает за управление отображением информации о пользователе на странице */
  constructor(userNameSelector, aboutUserSelector, avatarSelector) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._aboutUserSelector = document.querySelector(aboutUserSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    /**возвращает объект с данными пользователя */
    return {
      userNameSelector: this._userNameSelector.textContent,
      aboutUserSelector: this._aboutUserSelector.textContent,
      avatarSelector: this._avatarSelector.src
    };
  }

  setUserInfo({ name, about, avatar }) {
    /**принимает новые данные user'a и добавл их на стр */
    this._userNameSelector.textContent = name;
    this._aboutUserSelector.textContent = about;
    this._avatarSelector.src = avatar;

  }
}
