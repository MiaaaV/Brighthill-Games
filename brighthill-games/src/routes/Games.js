import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../components/styles/Games.css';
import '../components/styles/MediaQueries/GamesQuery.css'
import '../App.css';
import Star from '../images/icons/star.png';
import Character from '../images/games/games-char.png';
import EOD from '../images/games/EoD/EOD.png';
import CD from '../images/games/CD/CD.png';
import Extopia from '../images/games/Extopia/Extopia.png';
import Solaris from '../images/games/SolarisSurge/Solaris_Surge.png';
import DoA from '../images/games/DoA/DoA.png';
import PoT from '../images/games/PoT/PoT.png';
import ADS from '../images/games/ADS.png';
import BackToTopButton from "../components/TopBtn";
import MobileFooter from '../components/MobileFooter';

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

      <div className="games-hero-content flex-align flex-center">

        <div className="text-align flex-col col-5">
          <ul className="flex-row flex-center">
            {[...Array(4)].map((_) => (
              <img src={Star} alt="Star icon" className="star-icon" />
            ))}
          </ul>

          <h2 className="heading-2">
            ARE YOU AFRAID OF <span>THE DARK?</span>
          </h2>

          <h3 className="font-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi.”
          </h3>

          <Link to="/game/Echoes-of-Desolation">
            <button id="challenge-btn">CHALLENGE ACCEPTED</button>
          </Link>
        </div>

        <div className="flex col-5">
          <img src={Character} id="character" alt="Character" className="character" />
        </div>

      </div>

      <div id="all-games" className="all-games-container flex-col flex-align">
        <div>
          <h1>ALL GAMES</h1>
        </div>

        <div className="grid-3-1 col-8">
          {games.map((game, index) => (
            <Link to={`/game/${game.name}`} key={index}>
              <div className="all-games-image-container flex col-12">
                <div className="all-games-overlay flex-align flex-center w100">
                  <span>Read more</span>
                </div>
                <img className="w100" src={game.image} alt={game.alt} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="ad-container flex">
        <img src={ADS} alt="AD banner" className="ad-image col-12" />
      </div>
      
      <Footer />
      <MobileFooter />
    </>
  )
}

export default Games;