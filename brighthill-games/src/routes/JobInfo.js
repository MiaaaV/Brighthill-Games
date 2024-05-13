import React, { useState } from "react";
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Link } from "react-router-dom";
import careersData from "../components/CareersData";
import '../components/styles/JobInfo.css';
import '../components/styles/Reusables.css';
import JobChar from '../images/jobinfo/jobinfoChar.png';
import { FaArrowLeft } from "react-icons/fa";

function JobInfo () {

    const { jobTitle } = useParams();
    const jobInfo = careersData.find(jobInfo => jobInfo.jobTitle === jobTitle)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        portfolio: '',
        where: '',
        applicationLetter: null,
        cv: null,
      });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
          ...prevFormData,
          resume: file,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log(formData);
        setSubmitted(true);
      };

    return (
    <>
        <Nav />
        <Header headerText={jobInfo ? jobInfo.jobTitle : "Job Info"} />
            <div className="job-info-main">
                <div className="job-info-content">

                    <div className="job-info-lorem">

                        <Link to="/careers">
                            <div id="work-with-us" className="flex-row">
                                <FaArrowLeft className="font-2" />
                                <p className="uppercase font-2">work with us</p>
                            </div>
                        </Link>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate  velit esse cillum dolore eu fugiat 
                            nulla pariatur.
                        </p>
                    </div>

                    <div className="job-info-resp-quali">

                        <div>
                            <h2>Responsibilities</h2>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
                            </ul>
                            <h2>Qualifications</h2>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Duis aute irure dolor in reprehenderit</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet, velit esse cillum</li>
                            </ul>
                            <h3>Interested? Apply below!</h3>
                        </div>

                        <div className="job-info-char-container">
                            <img src={JobChar} alt="Job info character" className="job-info-char"/>
                        </div>
                    </div>

                    <div className="job-info-form-container">
                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                            <label>
                                Name*
                                <input 
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                />
                            </label>
                            <label>
                                Phone*
                                <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                required
                                />
                            </label>
                            <label>
                                Email*
                                <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                />
                            </label>
                            <label>
                                CV (.pdf, .doc, .docx)
                                <input 
                                type="file" 
                                name="cv" 
                                onChange={handleFileChange} 
                                accept=".pdf,.doc,.docx"
                                />
                            </label>
                            <label>
                                Portfolio
                                <input
                                type="text"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleChange}
                                placeholder="Portfolio"
                                />
                            </label>
                            <label>
                                Application letter
                                <input 
                                type="file" 
                                name="resume" 
                                onChange={handleFileChange} 
                                accept=".pdf,.doc,.docx" 
                                />
                            </label>
                            <label>
                                Where did you hear about this position?
                                <input
                                type="text"
                                name="where"
                                value={formData.where}
                                onChange={handleChange}
                                placeholder="Where did you hear about this position?"
                                />
                            </label>

                            <button type="submit">Apply</button>
                        </form>
                        ) : (
                            <div className="job-info-thank-you">
                                <h1>Thank you for applying!</h1>
                                <p>We will be in contact with you as soon as possible</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        <Footer />
    </>
    )
}
                
export default JobInfo;