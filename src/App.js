import "./App.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
// import DonateNow from "./components/DonateNow";
import UserLocation from "./components/UserLocation";
import { IoMdPin } from "react-icons/io";
import { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import products from "./data/products";
import Product from "./components/Product";
import { TARGET_STORES_MAP, WALMART_STORES_MAP } from "./data/locations";

const App = () => {
  const updatedProducts = products.map((product, i) => {
    let category;
    if (i < 68) {
      category = "baby formula";
    } else {
      category = "tampons";
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

  console.log(updatedProducts);

  const BACKENDURL = "https://public-good-app.herokuapp.com/api/v1/product";
  // const API_KEY = process.env.REACT_APP_ZIP_CODE_API_KEY;

  const [searchQuery, setSearchQuery] = useState("");
  // using hardcoded data state
  const [productsDisplayed, setDisplayedProducts] = useState(updatedProducts);
  const [address, setAddress] = useState("");
  // const [radius, setRadius] = useState(1);
  const [zipcode, setZipCode] = useState(null);
  const [display, setDisplay] = useState(null);

  const toggleDisplay = () => {
    if (display) {
      console.log("you have display of", display);
      console.log(typeof changeDisplay);
      return (
        <div className="products-displayed">
          {productsDisplayed && productsDisplayed.length > 0 ? (
            <ProductList products={productsDisplayed} />
          ) : (
            <h2>No products found. Please refine your search criteria.</h2>
          )}
        </div>
      );
    } else {
      return <LandingPage />;
    }
  };

  const changeDisplay = () => {
    setDisplay(true);
  };

  // const filter = (s) => {
  //   // search string

  //   const keyword = s.target.value;

  //   if (keyword !== "") {
  //     let products = [];
  //     // const axios = require('axios').default;
  //     const stringZipcode = String(zipcode);
  //     // const params = { searchStr: keyword, store_id: "4177" };
  //     // connect to backend and call getmapping to return list of product objects
  //     const params = {
  //       searchStr: keyword,
  //       zipCode: stringZipcode,
  //       target: TARGET_STORES_MAP[stringZipcode],
  //       walmart: WALMART_STORES_MAP[stringZipcode],
  //     };
  //     axios
  //       .get(BACKENDURL, { params: params })
  //       .then(function (response) {
  //         let productsData = response.data;
  //         for (let productData of productsData) {
  //           productData.buyURL = "https://www.walmart.com" + productData.buyURL;
  //           let imageURL = productData["imageURL"];
  //           delete productData.imageURL;
  //           productData.image = imageURL;
  //           console.log(productData);
  //           products.push(productData);
  //           console.log("!");
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     console.log("PRODUCTS: " + products);
  //     setDisplayedProducts(products);
  //   }

  // if (keyword !== "") {
  //   let products = [];
  //   // const axios = require('axios').default;
  //   const stringZipcode = String(zipcode);
  //   console.log(zipcode);
  //   console.log(stringZipcode);
  //   // const params = { searchStr: keyword, store_id: "4177" };
  //   // connect to backend and call getmapping to return list of product objects
  //   const params = {
  //     searchStr: keyword,
  //     zipCode: stringZipcode,
  //     target: TARGET_STORES_MAP[stringZipcode],
  //     walmart: WALMART_STORES_MAP[stringZipcode],
  //   };

  //   console.log(params);

  //   axios
  //     .get(BACKENDURL, { params: params })
  //     .then(function (response) {
  //       let productsData = response.data;
  //       for (let productData of productsData) {
  //         productData.buyURL = "https://www.walmart.com" + productData.buyURL;
  //         let imageURL = productData["imageURL"];
  //         delete productData.imageURL;
  //         productData.image = imageURL;
  //         console.log(productData);
  //         products.push(productData);
  //         console.log("!");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log("PRODUCTS: " + products);
  //   setDisplayedProducts(products);
  // }

  //   setSearchQuery(keyword);
  // };

  // filters products - hardcoded data

  // const filter = (s) => {
  //   const keyword = s.target.value;
  //   if (keyword !== "") {
  //     const result = products.filter((product) => {
  //       return product.name.toLowerCase().startsWith(keyword.toLowerCase());
  //     });
  //     setDisplayedProducts(keyword);
  //   } else {
  //     setDisplayedProducts(products);
  //   }
  //   setSearchQuery(keyword);
  // };

  const updateSearchQuery = (e) => {
    const updatedSearchQuery = e.target.value;
    setSearchQuery(updatedSearchQuery);
  };

  const filterByCategory = () => {
    if (searchQuery.toLowerCase() === "baby formula") {
      const result = updatedProducts.filter((product) => {
        // console.log("HELLO", product.props.category.toLowerCase());
        // console.log("HELLO", product.category.toLowerCase());
        return product.props.category.toLowerCase() === "baby formula";
      });
      setDisplayedProducts(result);
    } else if (searchQuery.toLowerCase() === "tampons") {
      const result = updatedProducts.filter((product) => {
        return product.props.category.toLowerCase() === "tampons";
      });
      setDisplayedProducts(result);
    }
  };

  const updateAddress = (e) => {
    const updatedAddress = e.target.value;

    setAddress(updatedAddress);
  };

  const updateZipCode = (e) => {
    setLocationInput("");
    const updatedZipCode = e.target.value;

    setZipCode(updatedZipCode);
  };

  // const updateRadius = (e) => {
  //   const updatedRadius = e.target.value;

  //   setRadius(updatedRadius);
  // };

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

    setLocationInput(
      `{${userLocation.coordinates.lat}, ${userLocation.coordinates.long}}`
    );
    setLoadedLocation(true);
    // setDisplayedProducts([]);
    // filterByCategory();
  };

  const onFormSubmit = (event) => {
    // call the zipcode API with the radius and zipcode
    event.preventDefault();
    console.log("submitting form");
    if (userLocation.coordinates === "Access to user location was denied") {
      onFormSubmitZipCode(event);
    } else {
      onFormSubmitLatLon(event);
      onFormSubmitZipCode(event);
      changeDisplay();
    }
    filterByCategory();
  };

  const onFormSubmitZipCode = (event) => {
    // call the zipcode API with the radius and zipcode
    event.preventDefault();
    console.log("submitting form");
    axios
      .get
      //   `https://www.zipcodeapi.com/rest/${API_KEY}/radius.json/${zipcode}/${radius}/miles`
      ()
      .then((response) => {
        changeDisplay();
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
        changeDisplay();
      });
  };

  const onFormSubmitLatLon = (event) => {
    // call the zipcode API with the radius and zipcode
    event.preventDefault();
    console.log("submitting form");
    axios
      .get
      //   `https://www.zipcodeapi.com/rest/${API_KEY}/radius-sql.json/${userLocation.coordinates.lat}/${userLocation.coordinates.long}/degrees/${radius}/mile/lat/lng/1`
      ()
      .then((response) => {
        changeDisplay();
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
        changeDisplay();
      });
  };

  const updateLocationValue = () => {
    if (locationInput && loadedLocation && !locationError) {
      setLocationInput("");
      return updateZipCode;
    }
  };

  const disabledSubmit = () => {
    if (!searchQuery) {
      return true;
    } else if (!zipcode || !locationInput) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="App">
      <Navbar />
      <nav className="search-container">
        <form onSubmit={onFormSubmit}>
          <div className="user-input">
            <div className="product-search-container">
              <input
                type="search"
                value={searchQuery}
                onChange={updateSearchQuery}
                className="search-input"
                placeholder="Search Products"
                required={true}
              />
            </div>
            <button
              disabled={
                disabledSubmit
                // (!searchQuery && (!zipcode || !locationInput)) ||
                // (searchQuery && (!zipcode || !locationInput))
                // // (!searchQuery && (zipcode || locationInput))
              }
              className="arrow"
              type="submit"
              onClick={filterByCategory}
            ></button>
            <div className="location-container">
              <input
                type="search"
                name="address-search"
                value={
                  locationInput && loadedLocation && !locationError
                    ? locationInput
                    : zipcode
                }
                className="address-input"
                placeholder="ZIP Code"
                onChange={updateLocationValue}
                required={true}
              />
              <button
                className="dropPin"
                disabled={!userLocation.loaded}
                onClick={setLocation}
              >
                <IoMdPin />
              </button>
            </div>
            <div className="error-message-container">{locationError}</div>
          </div>
        </form>
      </nav>
      <main className="App-content">
        {toggleDisplay()}
        {/* <DonateNow /> */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
