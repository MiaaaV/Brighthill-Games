import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../components/styles/Careers.css';
import Masterchef from '../images/careers/Masterchef.png';

function Careers() {

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(null);
  const [mouseMoved, setMouseMoved] = useState(0);

  const careersPositions = useRef();

  function handleMouseDown(e) {
    console.log(e.pageX);

    setIsDown(true);
    setStartX(e.pageX - careersPositions.current.offsetLeft);
    setScrollLeftState(careersPositions.current.scrollLeft)
    setMouseMoved(0);
  }

  function handleMouseMove(e) {
    if (!isDown) {
      return;
    }
    
    const currentMousePositionInsideContainer =
    e.pageX - careersPositions.current.offsetLeft;
    
    setMouseMoved(currentMousePositionInsideContainer - startX);
  }

  useEffect(() => {
    careersPositions.current.scrollLeft = scrollLeftState - mouseMoved;
  }, [scrollLeftState, mouseMoved]);

  return (
    <>
      <Nav />
      <div className="careers-banner-bg"></div>

        <div className="careers-banner">
          <h1 className="careers-title">Join brighthill games</h1>
        </div>

      <div className="careers-hero">
        <div className="careers-character">
          <img src={Masterchef} alt={Masterchef} className="careers-character-img"/>
        </div>

        <div className="careers-text-container">
          <div className="careers-text-box">
            <h2>Why choose Brighthill?</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim  veniam, quis nostrud exercitation ullamco.
            </h3>
            <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea  commodo consequat.
            </h3>
          </div>
        </div>
      </div>

      <div className="careers-jobs">
        <div className="careers-jobs-titles">
          <div className="careers-jobs-open">
            <h2>current open positions</h2>
          </div>

          <div className="careers-titles-list">
              <div className="careers-titles-list-container">
                <p>Marketing: 3</p>
              </div>
              <div className="careers-titles-list-container">
                <p>Art: 2</p>
              </div>
              <div className="careers-titles-list-container">
                <p>Production: 2</p>
              </div>
              <div className="careers-titles-list-container">
                <p>Developer: 1</p>
              </div>
          </div>
        </div>

        <div className="careers-positions">
          <div className="careers-positions-boxes" ref={careersPositions}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={() => setIsDown(false)}
          onMouseLeave={() => setIsDown(false)}
          onMouseMove={(e) => handleMouseMove(e)}
          >
            <div className="careers-positions-boxes-single">WOUSTIS</div>
            <div className="careers-positions-boxes-single">WOUSDSDDS</div>
            <div className="careers-positions-boxes-single">WOUDDD</div>
            <div className="careers-positions-boxes-single">WOUDDDD</div>
            <div className="careers-positions-boxes-single">WOUDDD</div>
            <div className="careers-positions-boxes-single">WOUDDD</div>
            <div className="careers-positions-boxes-single">WOUDDDD</div>
            <div className="careers-positions-boxes-single">WOUDDD</div>
            <div className="careers-positions-boxes-single">WOUDD</div>
            <div className="careers-positions-boxes-single">WOUDD</div>
            <div className="careers-positions-boxes-single">WOUDDDDDDDDD</div>
            <div className="careers-positions-boxes-single">WOUDDDDDDDDD</div>
          </div>
        </div>
      </div>

      <div>

      </div>
      <div>

      </div>
      <Footer />
    </>
  )
}

export default Careers;