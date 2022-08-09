// import React from "react";
// import PropTypes from "prop-types";
// import { useState } from "react";
// import "./ProductSearch.css";
// import Product from "./Product";


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

// export default ProductSearch;
