import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../components/styles/Games.css';
import '../App.css';
import Star from '../images/icons/star.png';
import Character from '../images/games/char2.png';
import EOD from '../images/games/EoD/EOD.png';
import CD from '../images/games/CD/CD.png';
import Extopia from '../images/games/Extopia/Extopia.png';
import Solaris from '../images/games/SolarisSurge/Solaris_Surge.png';
import DoA from '../images/games/DoA/DoA.png';
import PoT from '../images/games/PoT/PoT.png';
import ADS from '../images/games/ADS.png';

function Games() {

  return (
    <>
      <Nav />
      <div className="games-hero-content">
        <div className="textstuff">

          <ul className="star-icon-list">
            <a>
              <img src={Star} id="star" alt="Star icon" className="star-icon" />
            </a>
            <a>
              <img src={Star} id="star" alt="Star icon" className="star-icon" />
            </a>
            <a>
              <img src={Star} id="star" alt="Star icon" className="star-icon" />
            </a>
            <a>
              <img src={Star} id="star" alt="Star icon" className="star-icon" />
            </a>
          </ul>

          <h2 className="title-text">
            ARE YOU AFRAID OF <span className="title-text-color">THE DARK?</span></h2>
          <h3 className="title-text-lorem">“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi.”
          </h3>
          <a>
            <button className="accepted-button">CHALLENGE ACCEPTED</button>
          </a>
        </div>

        <div className="character-image">
          <img src={Character} id="character" alt="Character" className="character" />
        </div>

      </div>

      <div id="all-games" className="all-games-container">

        <div className="all-games-bg"></div>  {/* To be able to give background a blur without blurring other content */}

        <div className="all-games-title-container">
          <h1 className="all-games-title">ALL GAMES</h1>
        </div>

        <div className="all-games-grid">

          <Link to="/Echoes-of-Desolation">
            <div className="all-games-image-container">
              <div className="all-games-image-overlay">
                <span className="all-games-image-overlay-text">Read more</span>
              </div>
              <img src={EOD} alt="Echoes of Desolation icon" className="all-games-image" />
            </div>
          </Link>

          <Link to="/Celestial-Descent-Age-of-Dragons">
            <div className="all-games-image-container">
              <div className="all-games-image-overlay">
                <span className="all-games-image-overlay-text">Read more</span>
              </div>
              <img src={CD} alt="Celestial Descent icon" className="all-games-image" />
            </div>
          </Link>

          <Link to="/Extopia">
            <div className="all-games-image-container">
              <div className="all-games-image-overlay">
                <span className="all-games-image-overlay-text">Read more</span>
              </div>
              <img src={Extopia} alt="Extopia icon" className="all-games-image" />
            </div>
          </Link>

          <Link to="/Solaris-Surge">
            <div className="all-games-image-container">
              <div className="all-games-image-overlay">
                <span className="all-games-image-overlay-text">Read more</span>
              </div>
              <img src={Solaris} alt="Solaris Surge icon" className="all-games-image" />
            </div>
          </Link>

          <Link to="/Dawn-of-Arcanum">
            <div className="all-games-image-container">
              <div className="all-games-image-overlay">
                <span className="all-games-image-overlay-text">Read more</span>
              </div>
              <img src={DoA} alt="Dawn of Arcanum icon" className="all-games-image" />
            </div>
          </Link>

          <Link to="/Planet-of-Tomorrow">
            <div className="all-games-image-container">
              <div className="all-games-image-overlay">
                <span className="all-games-image-overlay-text">Read more</span>
              </div>
              <img src={PoT} alt="Planet of Tomorrow icon" className="all-games-image" />
            </div>
          </Link>

          {/*
            <img src={CD} alt="Celestial Descent icon" className="all-games-image"/>
            <img src={Extopia} alt="Extopia icon" className="all-games-image"/>
            <img src={Solaris} alt="Solaris Surge icon" className="all-games-image"/>
            <img src={DoA} alt="Dawn of Arcanum icon" className="all-games-image"/>
            <img src={PoT} alt="Planet of Tomorrow icon" className="all-games-image"/>
          */}
        </div>
      </div>

      <div className="ad">
        <img src={ADS} alt="AD banner" className="ad-image" />
      </div>
      <Footer />
    </>
  )
}

export default Games;