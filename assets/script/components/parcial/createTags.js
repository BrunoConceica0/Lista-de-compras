class CreateElement {
  constructor(tag, text = "", classe = "") {
    this.el = document.createElement(tag);
    this.el.className = classe;
    this.el.textContent = text;
  }
  addTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.appendChild(this.el);
    }
  }
  setAttribute(name, value) {
    this.el.setAttribute(name, value);
  }
  on(event, callback) {
    this.el.addEventListener(event, callback);
  }
}
export default CreateElement;
