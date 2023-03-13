import React, { useEffect, useState } from "react";
import Product from "../../components/Products/Product";
import { addToLS, getStoredCart } from "../../utilities/Utilities";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    let savedCart = [];
    for (let id in storedCart) {
      const productsFromLS = products.find((product) => product.id === id);
      if (productsFromLS) {
        const quantity = storedCart[id];
        productsFromLS.quantity = quantity;
        savedCart.push(productsFromLS);
      }
    }
    setCart(savedCart);
  }, [products]);

  // let addedProducts = [];
  // for (const id of cart) {
  //   addedProducts.push(products.find((product) => product.id === id));
  // }

  // Calculation
  const price = cart.reduce((pre, curr) => pre + curr.price, 0);
  const shipping = cart.reduce((pre, curr) => pre + curr.shipping, 0);
  const tax = parseFloat((price * 0.1).toFixed(2));
  const total = price + shipping + tax;

  const handleAddCart = (product) => {
    setCart([...cart, product]);
    addToLS(product.id);
  };

  console.log(cart);
  return (
    <div className="grid grid-cols-5 m-10">
      <div className="col-start-1 col-end-5 grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          ></Product>
        ))}
      </div>
      <div className="col-start-5 sticky top-4 h-screen pl-2  rounded-md pt-2 col-end-6 ml-4 bg-orange-200">
        <h1>Selected Item: {cart.length}</h1>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p>
          <b>Grand Total: ${total}</b>
        </p>
      </div>
    </div>
  );
};

export default Shop;
