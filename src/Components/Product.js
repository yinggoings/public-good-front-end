import React from "react";
import "./Product.css";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";

const Product = ({
  price,
  availability,
  retailer,
  id,
  image,
  brand,
  quantity,
  name,
}) => {
  let availabilityInfo;
  const determineAvailability = () => {
    if (quantity > 0) {
      availabilityInfo = `${quantity} available at ${retailer}`;
      return availabilityInfo;
    } else if ((quantity === null || quantity === 0) && !availability) {
      availabilityInfo = "Sold out";
      return availabilityInfo;
    } else if (quantity === null && availability) {
      availabilityInfo = `In stock at ${retailer}`;
      return availabilityInfo;
    }
  };
  return (
    <div className="product">
      <ul>
        <li>
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
              <ProductImage image={image} />
            </p>

            <p id="product-name product-name-container">{name}</p>
            <p id="product-price product-price-container">{`$${price}`}</p>
            <p id="product-quantity product-quantity-container">
              {/* {console.log(determineAvailability())} */}

              {/* {console.log(determineAvailability())} */}
              {determineAvailability()}
              {/* {availabilityInfo} */}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  availability: PropTypes.bool.isRequired,
  quantity: PropTypes.number,
  image: PropTypes.string.isRequired,
  retailer: PropTypes.string.isRequired,
};

export default Product;
