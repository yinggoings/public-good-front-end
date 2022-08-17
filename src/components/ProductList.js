import Product from "./Product";
import PropTypes from "prop-types";
import "./ProductList.css";

const ProductList = (props) => {
  const getProductList = (props) => {
    console.log(props.products.length);
    return props.products.map((product, i) => {
      console.log(i);
      let category;
      if (i <= 68) {
        category = "Baby Formula";
      } else {
        category = "Tampons";
      }
      return (
        <Product
          key={product.i}
          id={product.i}
          name={product.name}
          brand={product.brand}
          price={product.price}
          available={product.available}
          imageURL={product.imageURL}
          retailer={product.retailer}
          buyURL={product.buyURL}
          category={category}
        />
      );
    });
  };

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

  return <ul className="product-list no-bullet">{getProductList(props)}</ul>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      available: PropTypes.bool.isRequired,
      imageURL: PropTypes.string.isRequired,
      retailer: PropTypes.string.isRequired,
      buyURL: PropTypes.string,
    })
  ),
};

export default ProductList;
