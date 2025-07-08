import storange from "../parcial/localStorange.js";
export default (shoppingList) => {
  const inputText = document.querySelectorAll(
    "#lista-de-itens input[type='text']"
  );

  inputText.forEach((input, index) => {
    input.addEventListener("change", () => {
      shoppingList[index].value = input.value.trim();
      storange.setLocalStorage("shoppingList", shoppingList);
    });
  });
};
