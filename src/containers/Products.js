import React, { useContext } from "react";
// import { useSelector } from 'react-redux';

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { ProductContext } from "../context/Productcontext";

const Products = (props) => {
  // const productList = useSelector(state => state.shop.products);
  const { products } = useContext(ProductContext);
  return (
    <ul className="products-list">
      {/* productList.map() */}
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
