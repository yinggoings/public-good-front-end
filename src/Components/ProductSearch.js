import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./ProductSearch.css";
import Product from "./Product";
import { TiDelete } from "react-icons/ti";

const ProductSearch = ({ products, inputText, inputHandler, clearInput }) => {
  const filteredData = products.filter((product) => {
    //if no input the return the original
    if (inputText === "") {
      return "";
    }
    //return the item which contains the user input
    else {
      return product.name.toLowerCase().includes(inputText);
    }
  });

  const displayResults = () => {
    if (filteredData.length === 0 && inputText.length > 0) {
      return "No products found";
    } else if (filteredData.length === 0 && inputText.length === 0) {
      return "";
    } else {
      return `${filteredData.length} results`;
    }
  };

  return (
    <div>
      <h1>Product Search</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a product, like Similac"
          onChange={inputHandler}
          value={inputText}
        />
        <TiDelete className="clear" onClick={clearInput} />
      </div>

      <ul>
        {/* {console.log(filteredData)}
        {filteredData.length === 0 && inputText.length > 0
          ? "No products found"
          : `${filteredData.length} results`} */}
        {displayResults()}
        {filteredData.map((product) => (
          // <li key={product.id}>{product.name}</li>
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            availability={product.availability}
            quantity={product.quantity}
            image={product.image}
            retailer={product.retailer}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
