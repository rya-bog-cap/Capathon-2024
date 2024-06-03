import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './navbar.css';
import logoName from '../assets/images/capathon-logo-name.png';

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

  window.addEventListener('resize', showButton);

  // Automatic scroll to section linked to nav buttons
  function scrollToSection(sectionId) {
    const scrollTarget = document.getElementById(sectionId);

    scrollTarget?.scrollIntoView({
      behavior: 'smooth',
    });

    handleClick();
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => scrollToSection('section-zero')}>
          <img src={logoName} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => scrollToSection('section-one')}>
              Why?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => scrollToSection('section-two')}>
              Past Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => scrollToSection('section-three')}>
              Organization
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-signup-mobile"
              onClick={() => scrollToSection('section-four')}
            >
              Sign up!
            </Link>
            <Link
              to="/"
              className="nav-links btn--outline nav-signup"
              onClick={() => scrollToSection('section-four')}
            >
              Sign up!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
