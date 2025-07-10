import storange from "../parcial/localStorange.js";
import showAlert from "../parcial/showAlert.js";

export default (shoppingList) => {
  const editItemButtons = document.querySelectorAll(".editar");
  const saveButton = document.querySelector(".salve");
  const inputTextList = document.querySelectorAll(
    "#lista-de-itens input[type='text']"
  );

  // Quando clica no botão de editar (ativa input para edição)
  editItemButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const input = inputTextList[index];
      input.removeAttribute("readonly"); // permite editar
      input.focus();
      showAlert("Cuidado item sendo editado!", "warning");
    });
  });

  // Quando clica no botão de salvar edição
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      inputTextList.forEach((input, index) => {
        shoppingList[index].value = input.value.trim();
        input.setAttribute("readonly", true); // desativa edição após salvar
        showAlert("Item editado com sucesso!", "success");
      });
      storange.setLocalStorage("shoppingList", shoppingList);
    });
  }
};
