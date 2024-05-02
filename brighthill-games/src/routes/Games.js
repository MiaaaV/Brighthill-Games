import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../components/styles/Games.css';
import '../App.css';
import Star from '../images/icons/star.png';
import Character from '../images/games/char2.png';

function Games() {

  return (
    <>
      <Nav />
        <div className="content">
          <div className="textstuff">

            <ul className="star-icon-list">
              <a>
                <img src={Star} id="star" alt="Star icon" className="star-icon"/>
              </a>
              <a>
                <img src={Star} id="star" alt="Star icon" className="star-icon"/>
              </a>
              <a>
                <img src={Star} id="star" alt="Star icon" className="star-icon"/>
              </a>
              <a>
                <img src={Star} id="star" alt="Star icon" className="star-icon"/>
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
            
              <img src={Character} id="character" alt="Character" className="character"/>
            
          </div>

        </div>

        <div>
          <h1>hello this is games</h1>

        </div>

        <div>
          <h1>hello this is games</h1>

        </div>
      <Footer />
    </>
  )
}

export default Games;