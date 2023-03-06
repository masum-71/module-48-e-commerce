const addToLS = (id) => {
  let shoppingCart = {};
  const productsFromLS = localStorage.getItem("shopping-cart");

  if (productsFromLS) {
    shoppingCart = JSON.parse(productsFromLS);
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id]++;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { addToLS };
