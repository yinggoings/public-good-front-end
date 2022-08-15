import "./Navbar.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        PUBLIC GOOD.
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FiMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/about">ABOUT.</a>
          </li>
          <li>
            <a href="mailto:public.good.app@gmail.com">CONTACT.</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
