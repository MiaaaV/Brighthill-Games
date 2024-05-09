import React from "react";
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import careersData from "../components/CareersData";

function JobInfo () {

    const { jobTitle } = useParams();
    const jobInfo = careersData.find(jobInfo => jobInfo.jobTitle === jobTitle)

    return (
    <>
        <Nav />
        <Header headerText={jobInfo ? jobInfo.jobTitle : "Job Info"} />
            {jobInfo ? (
                <div>
                    <h2></h2>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        <Footer />
    </>
    )
}

export default JobInfo;