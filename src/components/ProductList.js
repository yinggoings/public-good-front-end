import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = (props) => {
  const getProductList = (props) => {
    return props.products.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          available={product.available}
          image={product.image}
          retailer={product.retailer}
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
      image: PropTypes.string.isRequired,
      retailer: PropTypes.string.isRequired,
    })
  ),
};

export default ProductList;
