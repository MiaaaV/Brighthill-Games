import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import gameData from "../components/GameData";
import '../components/styles/Game.css';
import Arrow from '../images/icons/arrow.png';
import Rarr from '../images/icons/rarr.png';

function Game() {

  const { id } = useParams();
  const game = gameData.find(game => game.id === id); /* find correct game page by id */

  /*useEffect(() => {
    window.scrollTo(0, 0)
    console.log("scrolled")
  }, [id])*/

  useEffect(() => {
    const accordionBtns = document.querySelectorAll(".accordion-btn");

    accordionBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "flex" ? "none" : "flex";
      });

      // open by default
      const content = btn.nextElementSibling;
      content.style.display = "flex";
    });
  }, []);


  return (
    <>
      <Nav />

      <div className="main-game-div"
        style={{ backgroundImage: `url(${game.background})` }} >

        <div className="grid-container col-9">

          <div className="grid-item flex-col">
            <img id="game-name" src={game.name} alt="Game name" />

            <p className="grid-text">{game.description1}</p>
            <p className="grid-text">{game.description2}</p>

            <a href={game.trailer} id="btn">Watch Trailer</a>
          </div>


          <div className="grid-img">
            <img id="game-img" src={game.banner} alt="Game" />
          </div>

          <div className="grid-img">
            <img className="filler-img" src={game.filler_img_1} alt="Game" />
          </div>

          <div className="grid-item flex-col">
            <h2 className="uppercase">Lorem ipsum</h2>

            <p className="grid-text">{game.filler_text_1}</p>
            <p className="grid-text">{game.filler_text_2}</p>
          </div>

          <div className="grid-item flex-col">
            <h2 className="uppercase">Lorem ipsum</h2>

            <p className="grid-text">{game.filler_text_1}</p>
            <p className="grid-text">{game.filler_text_2}</p>
          </div>

          <div className="grid-img">
            <img className="filler-img" src={game.filler_img_2} alt="Game" />
          </div>

          <div className="grid-item flex-end">
            <h2 className="uppercase">Overview</h2>
          </div>

          <div className="grid-item">
            <div className="accordion-item col-12">
              <button className="accordion-btn">
                <div>
                  <h3 className="white" style={{ marginLeft: "20px" }}>overview</h3>
                  <img id="arr-icon" src={Arrow} alt="arrow icon" />
                </div>
              </button>

              <div className="accordion-content flex-col">
                <div className="acc-helper col-12">
                  <div className="col-6">
                    <p>Title</p>
                    <p>Genre</p>
                    <p>Release date</p>
                    <p>Rating</p>
                  </div>

                  <div className="col-6">
                    <p>{game.title}</p>
                    <p>{game.genre}</p>
                    <p>{game.date}</p>
                    <div className="rating-icons">
                      <img src={game.rating_1} alt="Pegi icon" />
                      <img src={game.rating_2} alt="Violence icon" />
                    </div>
                  </div>
                </div>

                <div className="acc-helper col-12">
                  <div className="col-6">
                    <p>Publisher</p>
                    <p>Developer</p>
                    <p>Supported languages</p>
                  </div>

                  <div className="col-6">
                    <p>Brighthill Games</p>
                    <p>Brighthill Games</p>
                    <p>English, Finnish</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div >

      <div className="similar-games-container flex-col">
        <div>
          <h2 className="uppercase">more games like {game.title}</h2>
        </div>

        {/** !!!! how to get the exact link? */}

        <div className="link-content">
          <Link to="/Dawn-of-Arcanum">
            <img className="width" src={game.more_1} alt="similar game" />
          </Link>

          <Link to="/Solaris-Surge">
            <img className="width" src={game.more_2} alt="similar game" />
          </Link>

          <Link id="all-games-link" to="/games#all-games">
            <div>
              <h2 className="uppercase white">all games</h2>
              <img id="rarr" src={Rarr} alt="arrow icon" />
            </div>
          </Link>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Game;