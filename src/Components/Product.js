import React from "react";
import "./Product.css";
import PropTypes from "prop-types";

const Product = (props) => {
  return (
    <div className="product">
      <ul>
        <li>
          <section className="category-container">
            {/* <button className="select-product-button" onClick={}> */}
            {/* button description here */}
            {/* </button> */}
            <p>{props.brand}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>
              {props.availability != null ? `${props.quantity}` : "sold out"}
            </p>
            <p>{`Available at ${props.retailer}`}</p>
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
  retailer: PropTypes.string.isRequired,
};

export default Product;
