import { NavLink } from "react-router-dom";
import Logo from "../images/logos/logo-white.png";
import Twitter from "../images/icons/twitter.png";
import Instagram from "../images/icons/instagram.png";
import Facebook from "../images/icons/facebook.png";
import YouTube from "../images/icons/youtube.png";
import "./styles/Nav.css";
import "../App.css";
import { useEffect, useState } from "react";

function Nav() {

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <header className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <nav>
          <NavLink to="/">
            <img src={Logo} id="logo" alt="Brighthill Games logo" />
          </NavLink>

          <ul>
            <li className="nav-link"><NavLink to="/games">Games</NavLink></li>
            <li className="nav-link"><NavLink to="/careers">Work with us</NavLink></li>
            <li className="nav-link"><NavLink to="/about">About</NavLink></li>
            <li className="nav-link"><NavLink to="/news">News</NavLink></li>
          </ul>
        </nav>

        <ul className="icon-list">
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} id="facebook" className="social-icons" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} id="facebook" className="social-icons" alt="Instagram icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} id="facebook" className="social-icons" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={YouTube} id="facebook" className="social-icons" alt="YouTube icon" />
            </a>
          </li>
        </ul>


      </header>
    </>
  )
}

export default Nav;