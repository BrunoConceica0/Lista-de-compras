import CreateElement from "../parcial/createTags.js";
export default (shoppingList) => {
  const listItems = document.getElementById("lista-de-itens");
  const listPurchase = document.getElementById("itens-comprados");
  const liEmptyList = new CreateElement("li");
  const liEmptyPurchased = new CreateElement("li");
  const spanListEmpty = new CreateElement(
    "span",
    "Lista de compras vazia",
    "has-text-grey-light"
  );

  liEmptyList.el.appendChild(spanListEmpty.el);
  const spanShoppingEmpty = new CreateElement(
    "span",
    "Nenhum item comprado",
    "has-text-grey-light"
  );
  liEmptyPurchased.el.appendChild(spanShoppingEmpty.el);

  const itensNaoComprados = shoppingList.filter((item) => !item.checked);
  const itensComprados = shoppingList.filter((item) => item.checked);

  // Lista de compras (não comprados)
  if (itensNaoComprados.length === 0) {
    if (!listItems.contains(liEmptyList.el)) {
      listItems.appendChild(liEmptyList.el);
    }
  } else {
    if (listItems.contains(liEmptyList.el)) {
      listItems.removeChild(liEmptyList.el);
    }
  }

  // Lista de itens comprados
  if (itensComprados.length === 0) {
    if (!listPurchase.contains(liEmptyPurchased.el)) {
      listPurchase.appendChild(liEmptyPurchased.el);
    }
  } else {
    if (listPurchase.contains(liEmptyPurchased.el)) {
      listPurchase.removeChild(liEmptyPurchased.el);
    }
  }
};
