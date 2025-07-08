import CreateElement from "../parcial/createTags.js";
import storange from "../parcial/localStorange.js";
const listItems = document.getElementById("lista-de-itens");

function showItems(shoppingList) {
  listItems.innerHTML = "";
  shoppingList.forEach((item, index) => {
    const li = new CreateElement(
      "li",
      "",
      "item-compra is-flex is-justify-content-space-between"
    );
    li.setAttribute("data-value", index);
    const divInput = new CreateElement("div", "", "");
    const inputCheck = new CreateElement("input", "", "is-clickable");
    inputCheck.el.type = "checkbox";
    inputCheck.el.checked = item.checked;
    const inputText = new CreateElement("input", "", "is-size-5");
    inputText.el.value = item.value;
    inputText.el.type = "text";

    inputCheck.on("change", () => {
      const isChecked = inputCheck.el.checked;
      shoppingList[index].checked = isChecked;

      if (isChecked) {
        inputCheck.el.checked = true;
        inputText.el.style.textDecoration = "line-through";
        inputText.el.style.color = "gray";
      } else {
        inputCheck.el.checked = false;
        inputText.el.style.textDecoration = "none";
        inputText.el.style.color = "black";
      }

      storange.setLocalStorage("shoppingList", shoppingList);
    });
    console.log(inputCheck.el.checked);
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
