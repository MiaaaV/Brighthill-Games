import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Header from '../components/Header';
import '../components/styles/Careers.css';
import Masterchef from '../images/careers/Masterchef.png';
import careersData from '../components/CareersData';
import faqData from '../components/FAQData';
import Helsinki from '../images/careers/Helsinki.png';
import Arrow from '../images/icons/arrow.png';
import { Link } from 'react-router-dom';
import BackToTopButton from "../components/TopBtn";

function Careers() {

  const careersPositions = useRef();

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const [filteredJobs, setFilteredJobs] = useState(careersData);
  const [activeFilter, setActiveFilter] = useState(null);
  const [departmentCounts, setDepartmentCounts] = useState([]);

  useEffect(() => {
    const counts = {};
    careersData.forEach(job => {
      counts[job.department] = (counts[job.department] || 0) + 1;
    });
    setDepartmentCounts(counts);
  }, [careersData]);

  const filterJobsByDepartment = (department) => {
    if (activeFilter === department) {
      setFilteredJobs(careersData);
      setActiveFilter(null);
    } else {
      const filtered = careersData.filter(job => job.department === department);
      setFilteredJobs(filtered);
      setActiveFilter(department);
    }
  }

  useEffect(() => {
    const accordionBtns = document.querySelectorAll(".careers-accordion-btn");

    accordionBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "flex" ? "none" : "flex";
      });

    });
  }, []);

  return (
    <>
      <BackToTopButton />
      <Nav />

      <Header />

      <div className="careers-hero flex-row">
        <div className="careers-character">
          <img src={Masterchef} alt={Masterchef} className="careers-character-img" />
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

      <div id="explore" className="careers-jobs">
        <div className="careers-jobs-titles">
          <div className="careers-jobs-open">
            <h2>current open positions</h2>
          </div>

          <div className="careers-titles-list">
            <div className="careers-titles-list-container">
              <button onClick={() => filterJobsByDepartment("Marketing")} className={`filter-button ${activeFilter === "Marketing" ? "active" : ""}`}>
                Marketing: {departmentCounts["Marketing"] || 0}
              </button>
            </div>
            <div className="careers-titles-list-container">
              <button onClick={() => filterJobsByDepartment("Art")} className={`filter-button ${activeFilter === "Art" ? "active" : ""}`}>
                Art: {departmentCounts["Art"] || 0}
              </button>
            </div>
            <div className="careers-titles-list-container">
              <button onClick={() => filterJobsByDepartment("Production")} className={`filter-button ${activeFilter === "Production" ? "active" : ""}`}>
                Production: {departmentCounts["Production"] || 0}
              </button>
            </div>
            <div className="careers-titles-list-container">
              <button onClick={() => filterJobsByDepartment("Game Design")} className={`filter-button ${activeFilter === "Game Design" ? "active" : ""}`}>
                Game Design: {departmentCounts["Game Design"] || 0}
              </button>
            </div>
          </div>
        </div>

        <div className="careers-positions">
          <div className="careers-positions-boxes-scroll" ref={careersPositions}>

            <div className="careers-positions-boxes">
              {filteredJobs.map(job => (
                <Link key={job.jobTitle} to={`/title/${encodeURIComponent(job.jobTitle.replace(/\s+/g, '-'))}`} className="career-position-link">
                  <div className="careers-positions-boxes-single">
                    <div className="careers-positions-boxes-single-h2">
                      <h2>{job.jobTitle}</h2>
                    </div>
                    <p>{job.department}</p>
                    <p>{job.location}</p>
                    <p>{job.timeType}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="careers-helsinki-container flex-row">
        <div className="careers-helsinki">
          <img src={Helsinki} alt="Aerial footage of Helsinki" className="careers-helsinki-img col-12" />
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
          {faqData.map((item, index) => (
            <div key={item.id} className="careers-faq-item">
              <button className="careers-accordion-btn" onClick={() => toggleAccordion(index)}>
                <div>
                  <h3>{item.question}</h3>
                    <img className={`careers-arrow-icon ${openIndex === index ? 'rotate-icon' : ''}`}
                      src={Arrow}
                      alt="Arrow icon" 
                    />
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