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
import BackToTopButton from "../components/TopBtn";

function Games() {

  const games = [
    { name: "Echoes-of-Desolation", image: EOD, alt: "Echoes of Desolation icon" },
    { name: "Celestial-Descent-Age-of-Dragons", image: CD, alt: "Celestial Descent icon" },
    { name: "Extopia", image: Extopia, alt: "Extopia icon" },
    { name: "Solaris-Surge", image: Solaris, alt: "Solaris Surge icon" },
    { name: "Dawn-of-Arcanum", image: DoA, alt: "Dawn of Arcanum icon" },
    { name: "Planet-of-Tomorrow", image: PoT, alt: "Planet of Tomorrow icon" }
  ];

  return (
    <>
      <BackToTopButton />
      <Nav />
      <div className="games-hero-content">
        <div className="textstuff">

          <ul className="star-icon-list">
            {[...Array(4)].map((_) => (
              <img src={Star} alt="Star icon" className="star-icon" />
            ))}
          </ul>

          <h2 className="title-text">
            ARE YOU AFRAID OF <span className="title-text-color">THE DARK?</span></h2>
          <h3 className="title-text-lorem">“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi.”
          </h3>
          <Link to="/game/Echoes-of-Desolation">
            <button className="accepted-button">CHALLENGE ACCEPTED</button>
          </Link>
        </div>

        <div className="character-image">
          <img src={Character} id="character" alt="Character" className="character" />
        </div>

      </div>

      <div id="all-games" className="all-games-container">

        <div className="all-games-bg"></div>

        <div className="all-games-title-container">
          <h1 className="all-games-title">ALL GAMES</h1>
        </div>

        <div className="all-games-grid">
          {games.map((game, index) => (
            <Link to={`/game/${game.name}`} key={index}>
              <div className="all-games-image-container">
                <div className="all-games-image-overlay">
                  <span className="all-games-image-overlay-text">Read more</span>
                </div>
                <img src={game.image} alt={game.alt} className="all-games-image" />
              </div>
            </Link>
          ))}
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