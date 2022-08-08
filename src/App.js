import "./App.css";
import Product from "./components/Product.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import DonateNow from "./components/DonateNow";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaBars, FaCoffee, FiMenu, BiMenu } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Gerber Good Start SoothePro Non-GMO Powder Infant Formula",
      brand: "Gerber",
      price: 29.99,
      availability: true,
      quantity: 7,
      image:
        "https://target.scene7.com/is/image/Target/GUEST_1d31ad6f-ff97-4559-ad24-1bcc0e6de308",
      retailer: "Target",
    },
    {
      id: 2,
      name: "Enfamil Gentlease Ready To Feed Infant Formula Bottle",
      brand: "Enfamil",
      price: 9.19,
      availability: true,
      quantity: 11,
      image:
        "https://target.scene7.com/is/image/Target/GUEST_4e6608e1-dfa0-4950-8b5b-ecd2c675afa9",
      retailer: "Target",
    },
    {
      id: 3,
      name: "Similac Advance Infant Formula with Iron, Powder",
      brand: "Similac",
      price: 17.46,
      availability: true,
      quantity: 17,
      image:
        "https://i5.walmartimages.com/asr/fc4ec500-6fb4-481d-a4a6-6089e5a9952f.08b60e6fd1aeb3b47d41d129068c6b1e.png",
      retailer: "Walmart",
    },
    {
      id: 4,
      name: "Gerber Good Start SoothePro Powder Infant Formula",
      brand: "Gerber",
      price: 36.48,
      availability: false,
      quantity: null,
      image:
        "https://i5.walmartimages.com/asr/03468e8d-c033-4a86-b603-783f31b60d7b.dabe94896761f9ee5d2a0720161a0b94.jpeg",
      retailer: "Walmart",
    },
    {
      id: 5,
      name: "Similac Advance Infant Formula with Iron, Powder",
      brand: "Similac",
      price: 17.46,
      availability: true,
      quantity: 17,
      image:
        "https://i5.walmartimages.com/asr/fc4ec500-6fb4-481d-a4a6-6089e5a9952f.08b60e6fd1aeb3b47d41d129068c6b1e.png",
      retailer: "Walmart",
    },
    {
      id: 6,
      name: "Gerber Good Start SoothePro Powder Infant Formula",
      brand: "Gerber",
      price: 36.48,
      availability: false,
      quantity: null,
      image:
        "https://i5.walmartimages.com/asr/03468e8d-c033-4a86-b603-783f31b60d7b.dabe94896761f9ee5d2a0720161a0b94.jpeg",
      retailer: "Walmart",
    },
    {
      id: 7,
      name: "Gerber Good Start SoothePro Non-GMO Powder Infant Formula",
      brand: "Gerber",
      price: 29.99,
      availability: true,
      quantity: 7,
      image:
        "https://target.scene7.com/is/image/Target/GUEST_1d31ad6f-ff97-4559-ad24-1bcc0e6de308",
      retailer: "Target",
    },
    {
      id: 8,
      name: "Enfamil Gentlease Ready To Feed Infant Formula Bottle",
      brand: "Enfamil",
      price: 9.19,
      availability: true,
      quantity: 11,
      image:
        "https://target.scene7.com/is/image/Target/GUEST_4e6608e1-dfa0-4950-8b5b-ecd2c675afa9",
      retailer: "Target",
    },
  ]);

  return (
    <div className="App">
      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      {/* <FontAwesomeIcon icon={FaBars} /> */}
      {/* <FontAwesomeIcon icon={FaCoffee} /> */}
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      {/* <i class="fa-solid fa-bars"></i> */}
      <FiMenu />
      <header className="App-header">
        <h1 className="App-name">PUBLIC GOOD.</h1>
        <h2 className="nav-link">REGISTER.</h2>
        <h2 className="nav-link">LOG IN.</h2>
        <h2 className="nav-link">CONTACT US.</h2>
        {/* <h1 className="App-name">PUBLIC GOOD.</h1>
        <h2 className="Navigation-bar">REGISTER.</h2>
        <h2 className="Navigation-bar">LOG IN.</h2>
        <h2 className="Navigation-bar">CONTACT US.</h2> */}
      </header>
      <nav className="Search-bar"></nav>
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
