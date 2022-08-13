import "./App.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import DonateNow from "./components/DonateNow";
import UserLocation from "./components/UserLocation";
import { IoMdPin } from "react-icons/io";
import { useState } from "react";
import Navbar from "./components/Navbar";
import products from "./data/products";
import axios from "axios";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [productsDisplayed, setDisplayedProducts] = useState(products);
  const [address, setAddress] = useState("");
  const [radius, setRadius] = useState(1);
  const [zipcode, setZipCode] = useState(98109);

  const filter = (s) => {
    const keyword = s.target.value;

    if (keyword !== "") {
      const result = products.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setDisplayedProducts(result);
    } else {
      setDisplayedProducts(products);
    }

    setSearchQuery(keyword);
  };

  const updateAddress = (e) => {
    const updatedAddress = e.target.value;

    setAddress(updatedAddress);
  };

  const updateZipCode = (e) => {
    const updatedZipCode = e.target.value;

    setZipCode(updatedZipCode);
  };

  const updateRadius = (e) => {
    const updatedRadius = e.target.value;

    setRadius(updatedRadius);
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

  const onFormSubmit = (event) => {
    // call the zipcode API with the radius and zipcode
    event.preventDefault();
    console.log("submitting form");
    axios
      .get(
        // `https://www.zipcodeapi.com/rest/${process.env.REACT_APP_ZIP_CODE_API_KEY}/radius.json/${zipcode}/${radius}/miles`
        `https://www.zipcodeapi.com/rest/Mcc1u9e97OAgThhE2RGcyGwiaH6B1refBtHuDUtxcTH6qJtNNGDAIaJGYfR3yuX9/radius.json/${zipcode}/${radius}/miles`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  };

  return (
    <div className="App">
      <Navbar />
      {/* <nav className="search-container"> */}
      <div className="user-input">
        <form onSubmit={onFormSubmit}>
          <div className="product-search-container">
            <label>Product Search</label>
            <input
              type="search"
              label="product-search"
              value={searchQuery}
              onChange={filter}
              className="search-input"
              placeholder="Search Products"
              results={5}
              // autoSave
            />
          </div>
          <div className="arrow" />
          {locationError}
          <div className="location-container">
            <label>Zipcode</label>
            <input
              type="search"
              name="address-search"
              label="address-search"
              value={zipcode}
              className="address-input"
              placeholder="ZipCode"
              onChange={updateZipCode}
            />
          </div>

          {/* <button
            className="dropPin"
            disabled={!userLocation.loaded}
            onClick={setLocation}
          >
            <IoMdPin />
          </button> */}
          <div className="radius-container">
            <input
              type="number"
              name="radius"
              label="radius"
              onChange={updateRadius}
              value={radius}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {/* </nav> */}
      </div>

      {/* <SearchForm
        onFormSubmit={onFormSubmit}
        searchQuery={searchQuery}
        filter={filter}
      /> */}
      {/* <nav className="search-container">
        <div className="user-input"> */}
      {/* <div className="product-search-container">
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
          </div> */}
      {/* <div className="arrow" />
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
              onChange={updateZipCode}
            />
            <button
              className="dropPin"
              disabled={!userLocation.loaded}
              onClick={setLocation}
            >
              <IoMdPin />
            </button>
            <div className="radius-container">
              <input type="number" name="radius" label="radius" />
            </div> */}
      {/* </div> */}
      {/* <label for="radius">Choose a car:</label> */}
      {/* <select name="radius" id="radius">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="mercedes">5</option>
            <option value="audi">10</option>
          </select> */}
      {/* </div>
      </nav> */}
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
