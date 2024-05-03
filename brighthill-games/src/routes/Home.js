import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../components/styles/Home.css";
import "../components/styles/Reusables.css";
import "../App.css";
import "../assets/fonts/fonts.css";
import { FaAngleDown } from "react-icons/fa";
import News1 from '../images/news/news1.png';
import News2 from '../images/news/news2.png';
import News3 from '../images/news/news3.png';
import Banner1 from '../images/games/solaris-surge.png';
import Banner2 from '../images/games/extopia.png';
import Banner3 from '../images/games/celestial-descent-aod.png';
import Banner4 from '../images/games/dawn-of-arcanum.png';
import Recruit from '../images/backgrounds/fp-recruit.png';

function Home() {

  return (
    <>
      <Nav />

      <div className="main-container">
        <div className="hero">
          <div className="hero-content">
            <h1 id="hero-h1">The <span style={{ color: "#796940", fontFamily: "Desgaste" }}>past</span> never sleeps</h1>

            <div className="hero-text-box">
              <p>Uncover the asylum's chilling past, solve perplexing puzzles, and confront the echoes of lost souls.</p>
              <p>Will you unravel the secrets that have remained hidden for decades, or will you become another victim of Brighthill’s haunting legacy?</p>
            </div>

            <button id="btn">Learn more</button>
          </div>

          <FaAngleDown id="arrow-btn" />
        </div>

        <div className="recent">
          <h2 className="uppercase heading-2">Recent news and articles</h2>

          <div className="recent-content">
            <div>
              <img className="recent-img" src={News1} alt="News content" />

              <div className="recent-text-box">
                <h3 className="uppercase">EoD - behind the scenes</h3>
                <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div>
              <img className="recent-img" src={News2} alt="News content" />
              <div className="recent-text-box">
                <h3 className="uppercase">Making lady Veronica</h3>
                <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div>
              <img className="recent-img" src={News3} alt="News content" />
              <div className="recent-text-box">
                <h3 className="uppercase">2024 awards nominee</h3>
                <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fp-games">
          <h2 className="uppercase heading-2">Our games</h2>

          <div className="fp-games-content">
            <img className="fp-game" src={Banner1} alt="Games content" />
            <img className="fp-game" src={Banner2} alt="Games content" />
            <img className="fp-game" src={Banner3} alt="Games content" />
            <img className="fp-game" src={Banner4} alt="Games content" />
          </div>
        </div>

        <div className="fp-recruit">

          <div className="fp-div">
            <h3 className="uppercase heading-2">Life in Brighthill Games</h3>

            <p>Join the team of Brighthill and help us create games that last for generations</p>

            <div className="fp-positions">
              <div>
                <h1>8</h1>
                <p>open positions</p>
              </div>

              <div>
                <h1>2</h1>
                <p>offices in Finland</p>
              </div>
            </div>

            <button id="btn">explore positions</button>
          </div>

          <img className="fp-recruit-img" src={Recruit} alt="Recruit banner" />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Home;