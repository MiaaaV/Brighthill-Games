import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import careersData from "../components/CareersData";
import JobChar from '../images/jobinfo/jobinfo-char.png';
import Forms from '../components/Forms/Forms';
import '../components/styles/JobInfo.css';
import '../components/styles/MediaQueries/JobInfoQuery.css';
import '../components/styles/Reusables.css';
import BackToTopButton from "../components/TopBtn";

function JobInfo() {
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
        const newValue = value.trim() === "" ? "" : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
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
            <BackToTopButton />
            <Nav />
            <Header headerText={jobInfo ? jobInfo.jobTitle : "Job Info"} />

            <div className="job-info-container flex-center">
                <div className="job-info-content flex-col flex-align col-6">

                    <Link id="job-info-link" to="/careers">
                        <div className="flex-row col-12">
                            <FaArrowLeft className="job-info-arrow font-2" />
                            <p className="uppercase font-2">back to careers</p>
                        </div>
                    </Link>
 
                    <div className="job-info-lorem flex-col col-11">
                        <p className="font-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate  velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>

                        <div className="job-info-grid">
                            <div id="responsibilities" className="flex-col col-12">
                                <h2 className="uppercase">Responsibilities</h2>
                                <ul className="font-2">
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
                                </ul>
                            </div>

                            <div id="qualifications" className="flex-col col-12">
                                <h2 className="uppercase">Qualifications</h2>
                                <ul className="font-2">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Duis aute irure dolor in reprehenderit</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet, velit esse cillum</li>
                                </ul>
                            </div>

                            <div className="job-info-char-container">
                                <img src={JobChar} alt="Adventure character" />
                            </div>
                        </div>

                        <h2>Interested? Apply below!</h2>
                    </div>

                    <div className="job-info-forms col-9">
                        <Forms
                            formData={formData}
                            handleChange={handleChange}
                            handleFileChange={handleFileChange}
                            handleSubmit={handleSubmit}
                            submitted={submitted}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default JobInfo;