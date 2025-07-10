import storange from "../parcial/localStorange.js";
import showAlert from "../parcial/showAlert.js";

export default (shoppingList) => {
  const editItemButtons = document.querySelectorAll(".editar");
  const saveButton = document.querySelector(".salve");
  const inputTextList = document.querySelectorAll(
    "#lista-de-itens input[type='text']"
  );

  const originValue = [...shoppingList.map((item) => item.value)];

  // Quando clica no botão de editar (ativa input para edição)
  editItemButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const input = inputTextList[index];
      input.removeAttribute("readonly"); // permite editar
      input.focus();
      showAlert("Cuidado item sendo editado!", "warning");
    });
  });

  // Quando clica no botão de salvar (salva edição)
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      inputTextList.forEach((input, index) => {
        shoppingList[index].value = input.value.trim();
        const newValue = input.value.trim();
        const onldValue = originValue[index];

        if (newValue !== onldValue) {
          shoppingList[index].value = newValue;

          showAlert("Item editado com sucesso!", "success");
        } else {
          showAlert("Nada foi alterado!", "warning");
        }
        input.setAttribute("readonly", true);
      });
      storange.setLocalStorage("shoppingList", shoppingList);
    });
  }
};
