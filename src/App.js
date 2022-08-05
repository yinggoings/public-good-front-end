import "./App.css";
import Product from "./components/Product.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import DonateNow from "./components/DonateNow";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Enfamil 1",
      brand: "Enfamil",
      price: 47.99,
      availability: true,
      quantity: 7,
      retailer: "Target",
    },
    {
      id: 2,
      name: "Enfamil 2",
      brand: "Enfamil",
      price: 17.99,
      availability: true,
      quantity: 11,
      retailer: "Target",
    },
    {
      id: 3,
      name: "Enfamil 2",
      brand: "Enfamil",
      price: 19.99,
      availability: true,
      quantity: 17,
      retailer: "Walmart",
    },
    {
      id: 4,
      name: "Enfamil 2",
      brand: "Enfamil",
      price: 17.99,
      availability: false,
      quantity: null,
      retailer: "Kroger",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PUBLIC GOOD.</h1>
      </header>
      <main className="App-content">
        <div>
          <ProductList products={products} />
          <DonateNow />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
