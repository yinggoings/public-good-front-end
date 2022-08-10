import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./ProductSearch.css";
import Product from "./Product";

const ProductSearch = ({ products, inputText, inputHandler }) => {
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
      <input
        type="text"
        placeholder="Search for a product, like Similac"
        onChange={inputHandler}
      />
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

  // const onFormChange = (event) => {
  //   handleSearch(event.target.value);
  // };

  // const handleFormSubmission = (event) => {
  //   event.preventDefault();
  //   props.handleSubmission(catData);
  // };

  // return (
  //   <form onSubmit={handleFormSubmission}>
  //     <label>search.</label>
  //     <input type="text" onChange={onFormChange} />
  //   </form>
  // );
};

//   brand: "",
// };

// const AddressSearch = (props) => {
//   const [makeProduct, setProduct] = useState(defaultProductSearch);

//   const onProductSearchChange = (event) => {
//     const stateName = event.target.name;
//     const inputValue = event.target.value;

//     const newProductSearch = { ...makeProduct };
//     newProductSearch[stateName] = inputValue;

//     setProduct(newProductSearch);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: add some sort of callback here
//     // props.somesomertofcallback(address);
//     setProduct(defaultProductSearch);
//   };

// const ProductSearch = ({products}) => {
//   const [query, setQuery] = useState("");
//   return (
//     <div>
//       <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
//     {
//       Product.map((post, index) => {
//         <div key={index}>
//           <p>{post.title}</p>
//           <p>{post.author}</p>
//         </div>
//       })
//     }
//     </div>
//   )
// };

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="address"
//           value={makeProduct.brand}
//           onChange={onProductSearchChange}
//         />
//       </form>
//     </section>
//   );
// };

export default ProductSearch;
