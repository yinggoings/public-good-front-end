import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./ProductSearch.ss";

const defaultProductSearch = {
  brand: "",
};

const AddressSearch = (props) => {
  const [makeProduct, setProduct] = useState(defaultProductSearch);

  const onProductSearchChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newProductSearch = { ...makeProduct };
    newProductSearch[stateName] = inputValue;

    setProduct(newProductSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add some sort of callback here
    // props.somesomertofcallback(address);
    setProduct(defaultProductSearch);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          value={makeProduct.brand}
          onChange={onProductSearchChange}
        />
      </form>
    </section>
  );
};

export default AddressSearch;
