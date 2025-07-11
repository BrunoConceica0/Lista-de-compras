import CreateElement from "../components/parcial/createTags.js";
import storange from "../components/parcial/localStorange.js";
import deleteShopping from "../components/templeteShopping/deleteShopping.js";
import editItem from "../components/templeteShopping/editItem.js";
import listEmpty from "../components/templeteShopping/listEmpty.js";

const listItems = document.getElementById("lista-de-itens");
const listPurchase = document.getElementById("itens-comprados");
const purchased = document.getElementById("shopping");

function showItems(shoppingList) {
  if (shoppingList.length === 0) {
    purchased.style.display = "none";
    listItems.innerHTML = "Nenhum item adicionado";
    return;
  } else {
    purchased.style.display = "block";
  }
  listItems.innerHTML = "";
  listPurchase.innerHTML = "";

  shoppingList.forEach((item, index) => {
    const li = new CreateElement(
      "li",
      "",
      "item-compra is-flex is-justify-content-space-between"
    );
    li.setAttribute("data-value", index);

    // Div dos inputs
    const divInput = new CreateElement("div", "", "input-item");

    const checkbox = new CreateElement("input", "", "is-clickable");
    checkbox.el.type = "checkbox";
    checkbox.el.checked = item.checked;

    const inputText = new CreateElement("input", "", "is-size-5");
    inputText.el.type = "text";
    inputText.el.value = item.value;
    inputText.el.style.display = "disabled";

    if (item.checked) {
      inputText.el.style.textDecoration = "line-through";
      inputText.el.style.color = "gray";
    }

    checkbox.on("change", () => {
      item.checked = checkbox.el.checked;
      storange.setLocalStorage("shoppingList", shoppingList);
      showItems(shoppingList); // re-renderiza a lista (boa prática quando o item muda de seção)
    });

    const divActions = new CreateElement("div", "", "");

    const iconDelete = new CreateElement(
      "i",
      "",
      "fa-solid fa-trash is-clickable deletar"
    );
    const iconSave = new CreateElement(
      "i",
      "",
      "fa-regular fa-floppy-disk is-clickable salve"
    );
    const iconEdit = new CreateElement(
      "i",
      "",
      "fa-regular fa-pen-to-square is-clickable editar"
    );

    // Monta estrutura
    divInput.el.appendChild(checkbox.el);
    divInput.el.appendChild(inputText.el);
    li.el.appendChild(divInput.el);
    li.el.appendChild(divActions.el);

    // Condicional de botões
    divActions.el.appendChild(iconDelete.el);
    if (!item.checked) {
      divActions.el.appendChild(iconSave.el);
      divActions.el.appendChild(iconEdit.el);
    }

    // Append na lista correta
    item.checked
      ? listPurchase.appendChild(li.el)
      : listItems.appendChild(li.el);
  });

  // Funções externas (delegadas)
  deleteShopping(shoppingList);
  editItem(shoppingList);
  listEmpty(shoppingList);
}

export default showItems;
