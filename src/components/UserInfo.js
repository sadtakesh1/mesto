export default class UserInfo {
  /**Отвечает за управление отображением информации о пользователе на странице */
  constructor(userName, aboutUser, avatar) {
    this._userName = document.querySelector(userName);
    this._aboutUser = document.querySelector(aboutUser);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    /**возвращает объект с данными пользователя */
    return {
      userName: this._userName.textContent,
      aboutUser: this._aboutUser.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {
    console.log(name, about, avatar);
    /**принимает новые данные user'a и добавл их на стр */
    this._userName.textContent = name;
    this._aboutUser.textContent = about;
    this._avatar.src = avatar;

  }
}
