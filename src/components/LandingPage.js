import "./LandingPage.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { SiYourtraveldottv } from "react-icons/si";
import { HiShoppingCart } from "react-icons/hi";
import { BsSuitHeartFill } from "react-icons/bs";

const LandingPage = () => {
  return (
    <main>
      <div class="aboutUs">
        <div class="section">
          <div class="header">
            <h4>public goods for public good.</h4>
          </div>
          <div class="learn-about-us">
            <button type="button" class="btn-outline-dark btn-about-us">
              <a href="/about">about us</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="step-by-step">
          <div class="column">
            <div className="landing-page">
              <HiShoppingCart />
            </div>
            <h6 class="steps">input scarce product type</h6>
          </div>
          <h6 className="landing-page-text">and</h6>
          <div class="column">
            <div className="landing-page">
              <MdOutlineTravelExplore />
            </div>
            <h6 class="steps">enter zipcode you'd like to search</h6>
          </div>
          <h6 className="landing-page-text">or</h6>
          <div class="column">
            <div className="landing-page">
              <IoMdPin />
            </div>
            <h6 class="steps">
              click on the location drop pin to allow us to use your current
              location
            </h6>
          </div>
          {/* <h6 className="landing-page-text">then</h6> */}
          {/* <div class="column">
                        <div className="landing-page">
                        <SiYourtraveldottv/>
                        </div>
                        <h6 class="steps">select your desired search radius</h6>
                    </div> */}
        </div>
      </div>
      <div className="with-love">
        <div className="column">
          <div>
            <p>
              with love.
              <BsSuitHeartFill />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
