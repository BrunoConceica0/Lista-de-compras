import CreateElement from "./createTags.js";
const listItems = document.getElementById("lista-de-itens");

function showItems(shoppingList) {
  listItems.innerHTML = "";
  shoppingList.forEach((item, index) => {
    const li = new CreateElement(
      "li",
      "",
      "item-compra is-flex is-justify-content-space-between"
    );
    li.setAttrubute("data-value", index);
    const divInput = new CreateElement("divInput", "", "");
    const inputCheck = new CreateElement("input", "", "is-clickable");
    inputCheck.el.type = "checkbox";
    const inputText = new CreateElement("input", "", "is-size-5");
    inputText.el.value = item.value;
    inputText.el.type = "text";

    const divDelete = new CreateElement("div", "", "");
    const icon = new CreateElement(
      "i",
      "",
      "fa-solid fa-trash is-clickable deletar"
    );

    listItems.appendChild(li.el);
    li.el.appendChild(divInput.el);
    divInput.el.appendChild(inputCheck.el);
    divInput.el.appendChild(inputText.el);
    li.el.appendChild(divDelete.el);
    divDelete.el.appendChild(icon.el);
  });
}

export default showItems;
