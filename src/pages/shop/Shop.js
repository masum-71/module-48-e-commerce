import React, { useEffect, useState } from "react";
import Product from "../../components/Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddCart = (product) => {
    setCart([...cart, product]);
  };

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
      <div className="col-start-5 sticky top-4 h-screen text-center rounded-md pt-2 col-end-6 ml-4 bg-gray-100">
        <h1>Selected Item: {cart.length}</h1>
      </div>
    </div>
  );
};

export default Shop;
