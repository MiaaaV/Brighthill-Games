import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../components/styles/Home.css";
import "../App.css";
import "../assets/fonts/fonts.css"
import { FaAngleDown } from "react-icons/fa";
import News1 from '../images/news/news1.png'
import News2 from '../images/news/news2.png'
import News3 from '../images/news/news3.png'

function Home() {

  return (
    <>
      <Nav />

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
        <h2 style={{ textTransform: "uppercase" }}>Recent news and articles</h2>

        <div className="recent-content">
          <div>
            <img className="recent-img" src={News1} alt="News content" />

            <div className="recent-text-box">
              <h3 style={{ textTransform: "uppercase" }}>EoD - behind the scenes</h3>
              <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div>
            <img className="recent-img" src={News2} alt="News content" />
            <div className="recent-text-box">
              <h3 style={{ textTransform: "uppercase" }}>Making lady Veronica</h3>
              <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div>
            <img className="recent-img" src={News3} alt="News content" />
            <div className="recent-text-box">
              <h3 style={{ textTransform: "uppercase" }}>2024 awards nominee</h3>
              <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;