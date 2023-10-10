export default class UserInfo {
  /**Отвечает за управление отображением информации о пользователе на странице */
  constructor(userNameSelector, aboutUserSelector, avatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._aboutUser = document.querySelector(aboutUserSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    /**возвращает объект с данными пользователя */
    return {
      userName: this._userName.textContent,
      aboutUser: this._aboutUser.textContent,
      avatar: this._avatar.src
    };
  }

  setUserInfo({ name, about, avatar }) {
    /**принимает новые данные user'a и добавл их на стр */
    this._userName.textContent = name;
    this._aboutUser.textContent = about;
    this._avatar.src = avatar;

  }
}
