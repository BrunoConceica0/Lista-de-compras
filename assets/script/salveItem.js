export default () => {
  let shoppingList = [];
  const form = document.getElementById("form-itens");
  const itemInput = document.getElementById("receber-item");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    salveItem();
  });

  function salveItem() {
    const shoppingItem = itemInput.value.trim().toLowerCase();
    const chececkedDublicate = shoppingList.some(
      (element) => element.value === shoppingItem
    );

    if (chececkedDublicate) {
      alert("Item já foi adicionado");
      return;
    } else {
      alert("Item adicionado");
      shoppingList.push({ value: shoppingItem });
    }

    console.log(shoppingList);
    itemInput.value = "";
  }
};
