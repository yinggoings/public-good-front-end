import "./App.css";
// import Product from "./components/Product.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import DonateNow from "./components/DonateNow";
// import ProductSearch from "./components/ProductSearch";
import useGeoLocation from "./components/UserLocation";
// import DropPin from "./images/icons8-drop-pin-icon.png";
import { IoMdPin } from "react-icons/io";


import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaBars, FaCoffee, FiMenu, BiMenu } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
import Navbar from "./components/Navbar";

// const storeLocation = [

//     {
//       "storeId": 5571,
//       "storeLong": -122.9377466,
//       "storeLan": 47.0345622,
//       "storeName": "Walgreens",
//       "storeLongName": "Walgreens-Olympia,WA",
//       "storeAddress": "1510 Cooper Point Rd Sw",
//       "storeCity": "Olympia",
//       "storeState": "WA",
//       "storeZipCode": 98502,
//       "storePhoneNumber": "(360) 570-8008",
//       "storeDetails": "1510 Cooper Point Rd Sw, Olympia,WA 98502|(360) 570-8008|Store #5571 [24 Hours ST/RX]"
//     },
//     {
//       "storeId": 6590,
//       "storeLong": -122.3211975,
//       "storeLan": 47.6149788,
//       "storeName": "Walgreens",
//       "storeLongName": "Walgreens-Seattle,WA",
//       "storeAddress": "1531 Broadway",
//       "storeCity": "Seattle",
//       "storeState": "WA",
//       "storeZipCode": 98122,
//       "storePhoneNumber": "(206) 204-0599",
//       "storeDetails": "1531 Broadway, Seattle,WA 98122|(206) 204-0599|Store #6590"
//     },
//     {
//       "storeId": 6194,
//       "storeLong": -122.3386344,
//       "storeLan": 47.6094534,
//       "storeName": "Walgreens",
//       "storeLongName": "Walgreens-Seattle,WA",
//       "storeAddress": "222 Pike St",
//       "storeCity": "Seattle",
//       "storeState": "WA",
//       "storeZipCode": 98101,
//       "storePhoneNumber": "(206) 903-8392",
//       "storeDetails": "222 Pike St, Seattle,WA 98101|(206) 903-8392|Store #6194"
//     },
//     {
//       "storeId": 7034,
//       "storeLong": -117.4104309,
//       "storeLan": 47.6926956,
//       "storeName": "Walgreens",
//       "storeLongName": "Walgreens-Spokane,WA",
//       "storeAddress": "12 E Empire Ave",
//       "storeCity": "Spokane",
//       "storeState": "WA",
//       "storeZipCode": "99207",
//       "storePhoneNumber": "(509) 325-0781",
//       "storeDetails": "12 E Empire Ave, Spokane,WA 99207|(509) 325-0781|Store #7034 [24 Hours ST/RX]"
//     },
//     {
//       "storeId": 2205,
//       "storeLong": -117.4212799,
//       "storeLan": 47.8358612,
//       "storeName": "Walgreens",
//       "storeLongName": "Walgreens-Spokane,WA",
//       "storeAddress": "12315 Hwy 395",
//       "storeCity": "Spokane",
//       "storeState": "WA",
//       "storeZipCode": 99218,
//       "storePhoneNumber": "(509) 466-7461",
//       "storeDetails": "12315 Hwy 395, Spokane,WA 99218|(509) 466-7461|Store #2205"
//     },
//     {
//       "storeId": 5817,
//       "storeLong": -117.43766,
//       "storeLan": 47.680488,
//       "storeName": "Walgreens",
//       "storeLongName": "Walgreens-Spokane,WA",
//       "storeAddress": "1708 W Northwest Blvd",
//       "storeCity": "Spokane",
//       "storeState": "WA",
//       "storeZipCode": "99205",
//       "storePhoneNumber": "(509) 323-0309",
//       "storeDetails": "1708 W Northwest Blvd, Spokane,WA 99205|(509) 323-0309|Store #5817"
//     },
// ]

const products = [

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
]

const App = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
    
  const [productsDisplayed, setDisplayedProducts] = useState(products);


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

  const userLocation = useGeoLocation();
  // const [userLocation, setUserLocation] = useState("Location")

  // const useUserLocation = (a) => {
  //   const manualEntry = a.target.value;

  //   if (manualEntry !== "") {
  //     setUserLocation(manualEntry)
  //   } else {
  //     const accessUserLocation = useGeoLocation()
  //     setUserLocation(accessUserLocation)
  //   }
  // };
//  {
//  }
//     userLocation.loaded === true && userLocation.location === "Access to user location was denied"
//       ? "Please manually update your address."
//       : userLocation.loaded === true && userLocation.location !== "Access to user location was denied"
//       ? `${userLocation.coordinates.lat}, ${userLocation.coordinates.long}`
//       : `${userLocation.location}`;

  return (
    <div className="App">
      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      {/* <FontAwesomeIcon icon={FaBars} /> */}
      {/* <FontAwesomeIcon icon={FaCoffee} /> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      {/* <i class="fa-solid fa-bars"></i> */}
      {/* <FiMenu /> */}
      <Navbar />
      {/* <header className="App-header">
        <h1 className="App-name">PUBLIC GOOD.</h1>

        <ul className="links">
          <li className="nav-link">REGISTER.</li>
          <li className="nav-link">LOG IN.</li>
          <li className="nav-link">CONTACT US.</li>
        </ul> */}

      {/* <h1 className="App-name">PUBLIC GOOD.</h1>
        <h2 className="Navigation-bar">REGISTER.</h2>
        <h2 className="Navigation-bar">LOG IN.</h2>
        <h2 className="Navigation-bar">CONTACT US.</h2> */}
      {/* </header> */}
      <nav className="search-container">
        <div className="user-input">
          <div>
            <input
              type="search"
              label="product-search"
              value={searchQuery}
              onChange={filter}
              className="search-input"
              placeholder="Search Products"
            />
          </div>
          <div className="arrow"/>
          <div className="location-container">
            <input
              type="search"
              label="address-search"
              value={userLocation.loaded === true && userLocation.coordinates !== "Access to user location was denied"? `{${userLocation.coordinates.lat}, ${userLocation.coordinates.long}}` : "Location"}
              // value={`${userLocation.coordinates}`}
              // value={userLocation}
              // onChange=""
              className="address-input"
              placeholder="Location"
            />
            <button className="dropPin" onClick={userLocation}> <IoMdPin /></button>
            {userLocation.loaded === true && userLocation.coordinates !== "Access to user location was denied"
              ? ""
              : "Access to user location was denied. Please manually update your address."}
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
