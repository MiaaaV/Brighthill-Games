import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../components/styles/Careers.css';
import Masterchef from '../images/careers/Masterchef.png';
import careersData from '../components/CareersData';
import faqData from '../components/FAQData';
import Helsinki from '../images/careers/Helsinki.png';
import Arrow from '../images/icons/arrow.png';

function Careers() {

  //const [careersData, setCareersData] = useState([]);

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

  /* useEffect(() => {
    fetch('CareersData.js')
      .then(response => response.json())
      .then(data => setCareersData(data))
      .catch(error => console.error("Vituiks män", error))
  }, []); */

  useEffect(() => {
    const accordionBtns = document.querySelectorAll(".careers-accordion-btn");

    accordionBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "flex" ? "none" : "flex";
      });

      // open by default
      /* const content = btn.nextElementSibling;
      content.style.display = "flex"; */
    });
  }, []);

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
                <p>Marketing: 2</p>
              </div>
              <div className="careers-titles-list-container">
                <p>Art: 2</p>
              </div>
              <div className="careers-titles-list-container">
                <p>Production: 1</p>
              </div>
              <div className="careers-titles-list-container">
                <p>Game Design: 3</p>
              </div>
          </div>
        </div>

        <div className="careers-positions">
          <div className="careers-positions-boxes-scroll" ref={careersPositions}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={() => setIsDown(false)}
          onMouseLeave={() => setIsDown(false)}
          onMouseMove={(e) => handleMouseMove(e)}
          >

            <div className="careers-positions-boxes">
                {careersData.map(careers => (
                  <div key={careers.id} className="careers-positions-boxes-single">
                    <div className="careers-positions-boxes-single-h2">
                      <h2>{careers.jobTitle}</h2>
                    </div>
                    <p>{careers.department}</p>
                    <p>{careers.location}</p>
                    <p>{careers.timeType}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="careers-helsinki-container">
        <div className="careers-helsinki">
          <img src={Helsinki} alt="Image of Helsinki" className="careers-helsinki-img"/>
        </div>

        <div className="careers-lorem-text">
          <h2>Lorem ipsum dolor sit amet</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim  veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea  commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. 
            Sed ut perspiciatis unde omnis iste natus error.
          </h3>
        </div>
      </div>

      <div className="careers-faq-container">
        <h2>Frequently asked questions</h2>
        <div className="careers-faq-list">
          {faqData.map(item => (
            <div key={item.id} className="careers-faq-item">
              <button className="careers-accordion-btn">
                <div>
                  <h3>{item.question}</h3>
                  <img className="careers-arrow-icon" src={Arrow} alt="Arrow icon"/>
                </div>
              </button>
              
              <div className="careers-accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers;