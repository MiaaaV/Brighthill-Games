import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../components/styles/Game.css';
import Name from '../images/games/planet-of-tomorrow-name.png';
import GameImg from '../images/backgrounds/planet-of-tomorrow.png';

function Game() {

  return (
    <>
      <Nav />

      <div className="main-div">

        <div className="first-div">
          <div>
            <div className="first-div-content flex-col">
              <img id="game-name" src={Name} alt="Game name" />

              <div className="div-text flex-col">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <div>
                <button id="btn">watch trailer</button>
              </div>
            </div>
          </div>

          <div>
            <img id="game-img" src={GameImg} alt="Game" />
          </div>
        </div>

        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>

      </div>

      <Footer />
    </>
  )
}

export default Game;