import showItems from "./listShopping.js";
import storange from "../components/parcial/localStorange.js";
import showAlert from "../components/parcial/showAlert.js";
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
      itemInput.value = "";
      itemInput.focus();
      showAlert("Item já adicionado!", "erro");
      return;
    } else {
      shoppingList.push({ value: shoppingItem, checked: false });
      showAlert("Item adicionado com sucesso!", "success");
    }

    storange.setLocalStorage("shoppingList", shoppingList);

    showItems(shoppingList);

    itemInput.value = "";
  }
};
