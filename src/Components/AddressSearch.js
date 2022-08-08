import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./AddressSearch.ss";

const defaultAddressSearch = {
  address: "",
};

const AddressSearch = (props) => {
  const [makeAddress, setAddress] = useState(defaultAddressSearch);

  const onSearchChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newAddressSearch = { ...makeAddress };
    newAddressSearch[stateName] = inputValue;

    setAddress(newAddressSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add some sort of callback here
    // props.somesomertofcallback(address);
    setAddress(defaultAddressSearch);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          value={makeAddress.address}
          onChange={onSearchChange}
        />
      </form>
    </section>
  );
};

export default AddressSearch;
