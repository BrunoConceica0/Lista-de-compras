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
  setAttrubute(name, value) {
    this.el.setAttribute(name, value);
  }
}
export default CreateElement;
