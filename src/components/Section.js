export default class Section {
  /**У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер. */
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(elements) {
    /**по идеи отвечает за отрисовку всех элементов */
    elements.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    /**Принимает DOM-элемент и добавляет его в контейнер. */
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }
}

