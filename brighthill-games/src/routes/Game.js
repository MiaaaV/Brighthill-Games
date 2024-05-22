import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import gameData from "../components/GameData";
import Rarr from '../images/icons/rarr.png';
import Modal from '../components/VideoModal';
import BackToTopButton from "../components/TopBtn";
import MobileFooter from "../components/MobileFooter";
import '../components/styles/Game.css';
import '../components/styles/Reusables.css';
import '../components/styles/MediaQueries/GameQuery.css';

function Game() {

  const { id } = useParams();
  const game = gameData.find(game => game.id === id); /* find correct game page by id */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  useEffect(() => {
    const accordionBtns = document.querySelectorAll(".accordion-btn");

    accordionBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "flex" ? "none" : "flex";
        setIsAccordionOpen(prevState => !prevState)
      });

      // open by default
      const content = btn.nextElementSibling;
      content.style.display = "flex";
    });
  }, []);


  return (
    <>
      <BackToTopButton />
      <Nav />

      <div className="main-game-div flex flex-center"
        style={{ backgroundImage: `url(${game.background})` }} >

        <div className="grid-container grid-2-1 col-8">

          <div className="grid-item flex-col">
            <img id="game-name" className="col-12" src={game.name} alt="Game name" />

            <div>
              <p className="grid-text">{game.description1}</p>
              <p className="grid-text">{game.description2}</p>

              {game.id === "Echoes-of-Desolation" && (
                <button id="btn-sm" onClick={() => setIsModalOpen(true)}>
                  Watch Trailer
                </button>
              )}
            </div>
          </div>

          <div className="flex-row flex-center">
            <img className="filler-img" src={game.banner} alt="Game" />
          </div>

          <div className="game-img-div flex-row flex-center">
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

          <div className="game-img-div flex-row flex-center">
            <img className="filler-img" src={game.filler_img_2} alt="Game" />
          </div>

          <div className="grid-item flex-end">
            <h2 className="uppercase">Overview</h2>
          </div>

          <div className="grid-item">
            <div className="accordion-item col-12">
              <button className="accordion-btn">
                <div className="flex flex-between flex-align w100">
                  <h3 className="white" style={{ marginLeft: "20px" }}>overview</h3>
                  <FaAngleDown id="arr-icon" className={`white ${isAccordionOpen ? 'rotate-icon' : ''}`} />
                </div>
              </button>

              <div className="accordion-content flex-col">
                <div className="flex col-12">
                  <div className="col-8">
                    <p>Title</p>
                    <p>Genre</p>
                    <p>Release date</p>
                    <p>Rating</p>
                  </div>

                  <div className="col-8">
                    <p>{game.title}</p>
                    <p>{game.genre}</p>
                    <p>{game.date}</p>
                    <div className="rating-icons flex">
                      <img src={game.rating_1} alt="" />
                      <img src={game.rating_2} alt="" />
                      <img src={game.rating_3} alt="" />
                    </div>
                  </div>
                </div>

                <div className="flex col-12">
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

      <div className="similar-games-container flex-col flex-align col-12">
        <div>
          <h2 className="uppercase">more games like {game.title}</h2>
        </div>

        <div className="link-content flex flex-align">
          <Link to={game.link_1}>
            <img id="game-link" className="width" src={game.more_1} alt="similar game" />
          </Link>

          <Link to={game.link_2}>
            <img id="game-link" className="width" src={game.more_2} alt="similar game" />
          </Link>

          <Link id="all-games-link" to="/games#all-games">
            <div className="flex flex-align">
              <h2 className="uppercase white">all games</h2>
              <img id="rarr" src={Rarr} alt="arrow icon" />
            </div>
          </Link>
        </div>

      </div >

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <MobileFooter />
      <Footer />
    </>
  )
}

export default Game;