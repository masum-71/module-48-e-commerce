const addToLS = (id) => {
  let shoppingCart = getStoredCart();

  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id]++;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};
  const productsFromLS = localStorage.getItem("shopping-cart");

  if (productsFromLS) {
    shoppingCart = JSON.parse(productsFromLS);
  }
  return shoppingCart;
};

export { addToLS, getStoredCart };
