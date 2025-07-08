import showItems from "./showItems.js";
import storange from "../parcial/localStorange.js";
export default () => {
  let shoppingList = storange.getLocalStorage("shoppingList");

  showItems(shoppingList);
  const form = document.getElementById("form-itens");
  const itemInput = document.getElementById("receber-item");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    salveItem();
  });

  function salveItem() {
    const shoppingItem = itemInput.value.trim();

    const chececkedDublicate = shoppingList.some(
      (element) => element.value.toLowerCase() === shoppingItem.toLowerCase()
    );

    if (chececkedDublicate) {
      alert("Item já foi adicionado");
      itemInput.value = "";
      itemInput.focus();
      return;
    } else {
      alert("Item adicionado");
      shoppingList.push({ value: shoppingItem, checked: false });
    }

    storange.setLocalStorage("shoppingList", shoppingList);

    showItems(shoppingList);

    itemInput.value = "";
  }
};
