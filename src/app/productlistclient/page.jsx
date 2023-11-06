"use client";

import { useEffect, useState } from "react";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://dummyjson.com/products");
      res = await res.json();
      console.log(res);
      setProductList(res);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>ProductList</h1>
    </div>
  );
};

export default ProductList;
