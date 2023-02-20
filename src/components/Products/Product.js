import React from "react";

const Product = ({ product, handleAddCart }) => {
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="border-2 relative border-neutral-150 p-4">
      <img className="w-full mb-3" src={img} alt="" />
      <div>
        <p className="text-lg">{name}</p>
        <p className="text-sm">Price: ${price}</p>
      </div>
      <div className="mt-4 text-xs mb-5">
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} star</p>
      </div>
      <button
        onClick={() => handleAddCart(product)}
        className="w-full rounded-lg bg-orange-400 hover:bg-orange-800 absolute bottom-0 left-0"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
