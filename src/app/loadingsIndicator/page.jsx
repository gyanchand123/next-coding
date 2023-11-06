import React from "react";

async function productList() {
  let res = await fetch("https://dummyjson.com/products");
  res = await res.json();
  return res.products;
}

const LoadingIndicator = async () => {
  let products = await productList();
  console.log(products);
  return (
    <main>
      <h1>server page</h1>
      {products.map((product, index) => (
        <div key={index}>
          name: <span>{product?.title}</span>
          price: <span>{product?.price}</span>
        </div>
      ))}
    </main>
  );
};

export default LoadingIndicator;
