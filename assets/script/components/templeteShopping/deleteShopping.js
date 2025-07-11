import storange from "../parcial/localStorange.js";
import showItems from "../../views/listShopping.js";
import showAlert from "../parcial/showAlert.js";
export default (shoppingList) => {
  const deleteShopping = document.querySelectorAll(".deletar");

  deleteShopping.forEach((item) => {
    item.addEventListener("click", (event) => {
      const indexItem =
        event.target.parentElement.parentElement.getAttribute("data-value");

      shoppingList.splice(indexItem, 1);
      storange.setLocalStorage("shoppingList", shoppingList);
      showItems(shoppingList);
      showAlert("Item removido com sucesso!", "success");
    });
  });
};
