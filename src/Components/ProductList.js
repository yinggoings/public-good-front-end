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
          availability={product.availability}
          quantity={product.quantity}
          retailer={product.retailer}
        />
      );
    });
  };

  return <ul className="product-list no-bullet">{getProductList(props)}</ul>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      availability: PropTypes.bool.isRequired,
      quantity: PropTypes.number.isRequired,
      retailer: PropTypes.string.isRequired,
    })
  ),
};

export default ProductList;
