import CreateElement from "../parcial/createTags.js";
import storange from "../parcial/localStorange.js";
import deleteShopping from "./deleteshopping.js";
import editItem from "./editItem.js";

const listItems = document.getElementById("lista-de-itens");
const listPurchase = document.getElementById("itens-comprados");

function showItems(shoppingList) {
  listItems.innerHTML = "";
  listPurchase.innerHTML = "";

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
    inputText.el.type = "text";
    inputText.el.value = item.value;

    // Aplica estilo visual se estiver marcado
    if (item.checked) {
      inputText.el.style.textDecoration = "line-through";
      inputText.el.style.color = "gray";
    }

    // Evento: quando checkbox muda
    inputCheck.on("change", () => {
      item.checked = inputCheck.el.checked;
      storange.setLocalStorage("shoppingList", shoppingList);
      showItems(shoppingList); // re-renderiza tudo com base no novo estado
    });

    const divDelete = new CreateElement("div", "", "");
    const icon = new CreateElement(
      "i",
      "",
      "fa-solid fa-trash is-clickable deletar"
    );

    // Monta estrutura
    li.el.appendChild(divInput.el);
    li.el.appendChild(divDelete.el);
    divInput.el.appendChild(inputCheck.el);
    divInput.el.appendChild(inputText.el);
    divDelete.el.appendChild(icon.el);

    // Decide onde adicionar o item (lista principal ou de compras)
    if (item.checked) {
      listPurchase.appendChild(li.el);
    } else {
      listItems.appendChild(li.el);
    }
  });
  deleteShopping(shoppingList);
  editItem(shoppingList);
}

export default showItems;
