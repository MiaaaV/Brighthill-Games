import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTopButton from "../components/TopBtn";
import News1 from '../images/news/news1.png';
import News2 from '../images/news/news2.png';
import News3 from '../images/news/news3.png';
import Banner1 from '../images/games/SolarisSurge/Solaris_Surge_card.png';
import Banner2 from '../images/games/Extopia/Extopia_card.png';
import Banner3 from '../images/games/CD/CD_card.png';
import Banner4 from '../images/games/DoA/DoA_card.png';
import Recruit from '../images/backgrounds/fp-recruit.png';
import "../components/styles/Home.css";
import "../components/styles/Reusables.css";
import "../App.css";
import "../assets/fonts/fonts.css";
import careersData from '../components/CareersData'; // Import the careers data
import MobileFooter from '../components/MobileFooter';

function Home() {

  const newsData = [
    {
      title: 'EoD - Behind the scenes',
      link: '/news/article/EoD-Behind-the-scenes',
      image: News1
    },
    {
      title: 'Making lady Veronica',
      link: '/news/article/Making-lady-Veronica',
      image: News2
    },
    {
      title: '2024 Awards nominee',
      link: '/news/article/2024-Awards-nominee',
      image: News3
    }
  ];

  const gamesData = [
    { title: 'Solaris Surge', image: Banner1 },
    { title: 'Extopia', image: Banner2 },
    { title: 'Celestial Descent: Age of Dragons', image: Banner3 },
    { title: 'Dawn of Arcanum', image: Banner4 }
  ];

  const scrollToRecent = () => {
    const recentSection = document.getElementById("recent");
    const navHeight = 144;
    const sectionTop = recentSection.getBoundingClientRect().top;
    const offset = sectionTop + window.scrollY - navHeight;
    animateScroll.scrollTo(offset, {
      smooth: true,
      duration: 300
    });
  };

  const openPositions = careersData.length;
  const officesAmount = 2;

  return (
    <>
      <BackToTopButton />
      <Nav />

      <div className="hero flex-col">
        <div className="hero-content flex-col flex-align col-12">
          <h1 id="hero-h1">The <span style={{ color: "#796940", fontFamily: "Desgaste" }}>past</span> never sleeps</h1>

          <div className="flex-col col-4">
            <p className="font-3">Uncover the asylum's chilling past, solve perplexing puzzles, and confront the echoes of lost souls.</p>
            <p className="font-3">Will you unravel the secrets that have remained hidden for decades, or will you become another victim of Brighthill’s haunting legacy?</p>
          </div>

          <Link to="/game/Echoes-of-Desolation">
            <button id="btn">Learn more</button>
          </Link>
        </div>

        <FaAngleDown onClick={scrollToRecent} id="arrow-btn" />
      </div>

      <div id='recent' className="recent flex-center flex-row flex-align">
        {newsData.map((news, index) => (
          <div className="dasd flex-col col-2" key={index}>
            <Link id="recent-link" to={news.link}>
              <img src={news.image} alt="News content" />
            </Link>

            <div className="flex-col flex-align">
              <h2>{news.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fp-games flex-col flex-center flex-align">
        <div className="flex-row flex-between col-8">
          <h2 className="uppercase heading-2">Our games</h2>

          <Link to="/games" className="all-games-btn">
            <div className="flex-row">
              <h2 className="">All games</h2>
              <FaArrowRight />
            </div>
          </Link>
        </div>

        <div className="fp-games-content grid-2-1 col-8">
          {gamesData.map((game, index) => (
            <Link to={`/${game.title}`} key={index}>
              <img className="fp-game" src={game.image} alt="Games content" />
            </Link>
          ))}
        </div>
      </div>

      <div className="fp-recruit flex-row flex-between col-12">

        <div className="fp-div flex-col text-align flex-align flex-center col-6">
          <h3 className="uppercase heading-2">Life in Brighthill Games</h3>

          <p>Join the team of Brighthill and help us create games that last for generations</p>

          <div className="fp-positions flex-center">
            <div className="flex-col">
              <h1 className="heading-1 bold black text-align">{openPositions}</h1>
              <p className="font-2 black text-align">open positions</p>
            </div>

            <div className="flex-col">
              <h1 className="heading-1 bold black text-align">{officesAmount}</h1>
              <p className="font-2 black text-align">offices in Finland</p>
            </div>
          </div>

          <div>
            <Link to="/careers#explore">
              <button id="btn">explore positions</button>
            </Link>
          </div>
        </div>

        <img className="fp-recruit-img col-6" src={Recruit} alt="Recruit banner" />
      </div>

      <Footer />
      <MobileFooter />
    </>
  )
}

export default Home;