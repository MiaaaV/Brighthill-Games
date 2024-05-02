import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../components/styles/Home.css";
import "../App.css";
import "../assets/fonts/fonts.css"
import { FaAngleDown } from "react-icons/fa";

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

      <Footer />
    </>
  )
}

export default Home;