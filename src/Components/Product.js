import React from "react";
import "./Product.css";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";

const Product = (props) => {
  return (
    <div className="product">
      <ul>
        <li>
          <section className="product-container">
            {/* <button className="select-product-button" onClick={}> */}
            {/* button description here */}
            {/* </button> */}
            <p id="product-brand">{props.brand}</p>
            <p className = "product-image">
              <ProductImage
                image={props.image}
              />
            </p>
            
            <p id="product-name">{props.name}</p>
            <p id="product-price">{`$${props.price}`}</p>
            <p id="product-quantity">
              {`${props.quantity} units available at ${props.retailer}`}
            </p>
            {/* <p id='retailer'>{`Available at ${props.retailer}`}</p> */}
          </section>
        </li>
      </ul>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  availability: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  retailer: PropTypes.string.isRequired,
};

export default Product;
