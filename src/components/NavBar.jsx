import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./navbar.css";

function NavBar() {
  useEffect(() => {
    showButton();
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  // Automatic scroll to section linked to nav buttons
  function scrollToSection(sectionId) {
    const scrollTarget = document.getElementById(sectionId);

    scrollTarget?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Capathon <i className="fa-solid fa-code"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => scrollToSection("section-one")}
              >
                Page id
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => scrollToSection("section-two")}
              >
                Row 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => scrollToSection("section-three")}
              >
                Page id 2
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up!
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    );
}

export default NavBar;
