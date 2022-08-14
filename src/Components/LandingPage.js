import "./LandingPage.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { SiYourtraveldottv } from "react-icons/si";
import { HiShoppingCart } from "react-icons/hi"
import { BsSuitHeartFill } from "react-icons/bs"

const LandingPage = () => {

    return (
        <main>
            <div className="row">
                <div className="column">
                    <div class="aboutUs">
                        <div class="row welcome text-center">
                            <div class="col-12">
                                <h4 class="display-5">public goods for public good.</h4>
                            </div>
                            {/* <hr> */}
                        <div class="learn-about-us d-flex justify-content-center">
                                <button type="button" class="btn btn-outline-dark btn-md">
                                    <a href="story.html">about us</a></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <div className="column"> */}
                    <div class="container-fluid padding">
                        <div class="row text-center padding row-two">
                            <div class="col-xs-12 col-sm-4 column">
                                <div className="landing-page">
                                <HiShoppingCart/>
                                </div>
                                <h6 class="one">input scarce product type</h6>
                            </div>
                            <h6 className="landing-page-text">and</h6>
                            <div class="col-xs-12 col-sm-4 column">
                                <div className="landing-page">
                                <MdOutlineTravelExplore/>
                                </div>
                                <h6 class="two">enter zipcode you'd like to search</h6>
                            </div>
                            <h6 className="landing-page-text">or</h6>
                            <div class="col-xs-12 col-sm-4 column">
                                <div className="landing-page">
                                <IoMdPin/>
                                </div>
                                <h6 class="two">click on the location drop pin to allow us to use your current location</h6>
                            </div>
                            <h6 className="landing-page-text">then</h6>
                            <div class="col-xs-12 col-sm-4 column">
                                <div className="landing-page">
                                <SiYourtraveldottv/>
                                </div>
                                <h6 class="two">select your desired search radius</h6>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="row-three">
                <div className="column">
                    <div class="col-12">
                        <p class="lead">with love. 
                            {/* <svg width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16"></svg>  */}
                            <BsSuitHeartFill/>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;