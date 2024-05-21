import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import Logo from "../images/logos/logo-white.png";
import Twitter from "../images/icons/twitter.png";
import Instagram from "../images/icons/instagram.png";
import Facebook from "../images/icons/facebook.png";
import YouTube from "../images/icons/youtube.png";
import MobileFooter from './MobileFooter';
import "./styles/Nav.css";
import "./styles/Reusables.css";
import "./styles/MediaQueries/NavQuery.css";
import "../App.css";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="flex flex-align flex-between">
          <NavLink to="/">
            <img src={Logo} id="logo" alt="Brighthill Games logo" />
          </NavLink>

          <BiMenu id="burger-menu" onClick={toggleMenu} />

          <ul className="desktop-ul flex-row">
            <li className="nav-link font-2"><NavLink to="/games">Games</NavLink></li>
            <li className="nav-link font-2"><NavLink to="/careers">Work with us</NavLink></li>
            <li className="nav-link font-2"><NavLink to="/about">About</NavLink></li>
            <li className="nav-link font-2"><NavLink to="/news">News</NavLink></li>
          </ul>
        </nav>

        <ul className="desktop-ul icon-list">
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} className="social-icons" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} className="social-icons" alt="Instagram icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} className="social-icons" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={YouTube} className="social-icons" alt="YouTube icon" />
            </a>
          </li>
        </ul>

        {/* MOBILE OVERLAY */}

        <div className={`overlay ${menuOpen ? 'overlay-open' : ''}`}>

          <nav id="mobile-nav" className="flex flex-align flex-between">
            <NavLink to="/">
              <img src={Logo} id="logo" alt="Brighthill Games logo" />
            </NavLink>

            <BiX id="close-menu" onClick={closeMenu} />
          </nav>

          <div>
            <ul className="mobile-ul text-align">
              <li className="nav-link uppercase"><NavLink to="/games">Games</NavLink></li>
              <li className="nav-link uppercase"><NavLink to="/careers">Work with us</NavLink></li>
              <li className="nav-link uppercase"><NavLink to="/about">About</NavLink></li>
              <li className="nav-link uppercase"><NavLink to="/news">News</NavLink></li>
            </ul>
          </div>

          <MobileFooter />
        </div>

      </header>
    </>
  );
}

export default Nav;