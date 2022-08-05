import GitHubLogo from "../images/icons8-github.svg";
import InstagramLogo from "../images/icons8-instagram.svg";
import RedditLogo from "../images/icons8-reddit.svg";
import TwitterLogo from "../images/icons8-twitter-circled.svg";
import EmailLogo from "../images/icons8-email.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>find us.</h1>
      <a
        href="https://github.com/public-good-app"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHubLogo} alt="github logo" />
      </a>
      <a href="mailto:public.good.app@gmail.com">
        <img src={EmailLogo} alt="email logo" />
      </a>
      {/* <img src={InstagramLogo} alt="instagram logo" />
      <img src={RedditLogo} alt="reddit logo" />
      <img src={TwitterLogo} alt="twitter logo" /> */}
    </div>
  );
};

export default Footer;
