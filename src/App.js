import "./App.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import DonateNow from "./components/DonateNow";
import UserLocation from "./components/UserLocation";
import { IoMdPin } from "react-icons/io";
import { useState } from "react";
import Navbar from "./components/Navbar";
import axios from 'axios';
import product from "./components/Product";

// import products from "./data/products";

const App = () => {
  const BACKENDURL = "https://public-good-app.herokuapp.com/api/v1/product";

  const [searchQuery, setSearchQuery] = useState("");
  // using hardcoded data state
  const [productsDisplayed, setDisplayedProducts] = useState([]);
  const [address, setAddress] = useState("");

  const filter = (s) => {
    // search string

    const keyword = s.target.value;

    if (keyword !== "") {
      let products = [];
      // const axios = require('axios').default;
      const params = {"searchStr": keyword};
      // connect to backend and call getmapping to return list of product objects
      axios.get(BACKENDURL, {"params": params})
          .then(function (response) {
            let productsData = response.data;
            for (let productData of productsData) {
              productData.buyURL = "https://www.walmart.com" + productData.buyURL;
              let imageURL = productData["imageURL"];
              delete productData.imageURL;
              productData.image = imageURL;
              console.log(productData);
              products.push(productData);
              console.log("!");
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      console.log("PRODUCTS: " + products);
      setDisplayedProducts(products);
    }

    setSearchQuery(keyword);
  };

  const updateAddress = (e) => {
    const updatedAddress = e.target.value;

    setAddress(updatedAddress);
  };

  const userLocation = UserLocation();
  const [locationInput, setLocationInput] = useState("");
  const [loadedLocation, setLoadedLocation] = useState(false);
  const [locationError, setLocationError] = useState("");
  const setLocation = () => {
    if (userLocation.coordinates === "Access to user location was denied") {
      setLocationError(
        "Access to user location was denied. Please manually update your address."
      );
    }
    // console.log(`setlocation: ${userLocation.coordinates.lat}`);

    setLocationInput(
      `{${userLocation.coordinates.lat}, ${userLocation.coordinates.long}}`
    );
    setLoadedLocation(true);
  };
  // console.log(`render: ${userLocation.coordinates.lat}`);
  return (
    <div className="App">
      <Navbar />
      <nav className="search-container">
        <div className="user-input">
          <div className="product-search-container">
            <input
              type="search"
              label="product-search"
              value={searchQuery}
              onChange={filter}
              className="search-input"
              placeholder="Search Products"
              results={5}
              autoSave
            />
          </div>
          <div className="arrow" />
          {locationError}
          <div className="location-container">
            <input
              type="search"
              name="address-search"
              label="address-search"
              value={
                locationInput && loadedLocation && !locationError
                  ? locationInput
                  : address
              }
              className="address-input"
              placeholder="ZipCode"
              onChange={updateAddress}
            />
            <button
              className="dropPin"
              disabled={!userLocation.loaded}
              onClick={setLocation}
            >
              <IoMdPin />
            </button>
          </div>
        </div>
      </nav>
      <main className="App-content">
        <div className="products-displayed">
          {productsDisplayed && productsDisplayed.length > 0 ? (
            <ProductList products={productsDisplayed} />
          ) : (
            <h2>No products found. Please refine your search criteria.</h2>
          )}
        </div>
        <DonateNow />
        <Footer />
      </main>
    </div>
  );
};

export default App;
