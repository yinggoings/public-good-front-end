import React from "react";
import "./Product.css";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";

const Product = ({
  price,
  available,
  retailer,
  id,
  imageURL,
  brand,
  name,
  buyURL,
  category,
}) => {
  const determineAvailability = () => {
    let availabilityInfo;

    if (available) {
      availabilityInfo = "In stock at ";
      return availabilityInfo;
    } else {
      availabilityInfo = `Sold out at ${retailer}`;
      return availabilityInfo;
    }
  };
  return (
    <div className="product">
      <ul className="unordered">
        <li clssName="list-item">
          <section className="product-container">
            {/* <button className="select-product-button" onClick={}> */}
            {/* button description here */}
            {/* </button> */}
            <p
              id="product-brand product-brand-container"
              style={{ fontWeight: "bold" }}
            >
              {brand}
            </p>
            <p className="product-image image-container">
              <ProductImage image={imageURL} />
            </p>

            <p id="product-name product-name-container" className="capitalize">
              {name}
            </p>
            <p id="product-price product-price-container">{`$${price}`}</p>
            <p id="product-quantity product-quantity-container">
              {determineAvailability()}
              {available ? (
                <a className="linkRel" href={buyURL} target="_blank" rel="noreferrer">
                  {retailer}
                </a>
              ) : (
                ""
              )}

              {/* {props.quantity === null
                ? "Sold out"
                : `${props.quantity} units available at ${props.retailer}`} */}
              {/* {`${props.quantity} units available at ${props.retailer}`} */}
            </p>
            {/* <p id='retailer'>{`Available at ${props.retailer}`}</p> */}
          </section>
        </li>
      </ul>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  imageURL: PropTypes.string.isRequired,
  retailer: PropTypes.string.isRequired,
  buyURL: PropTypes.string,
  category: PropTypes.string,
};

export default Product;
