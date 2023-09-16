export default class UserInfo {
  /**Отвечает за управление отображением информации о пользователе на странице */
  constructor(userName, aboutUser) {
    this._userName = document.querySelector(userName);
    this._aboutUser = document.querySelector(aboutUser);
  }

  getUserInfo() {
    /**возвращает объект с данными пользователя */
    return {
      userName: this._userName.textContent,
      aboutUser: this._aboutUser.textContent,
    };
  }

  setUserInfo({ userName, aboutUser }) {
    /**принимает новые данные user'a и добавл их на стр */
    this._userName.textContent = userName;
    this._aboutUser.textContent = aboutUser;
  }
}
