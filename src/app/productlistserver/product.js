"use client";
import React from "react";

const Product = ({ price }) => {
  return (
    <div>
      <button onClick={() => alert(`${price}`)}>check price</button>
    </div>
  );
};

export default Product;
