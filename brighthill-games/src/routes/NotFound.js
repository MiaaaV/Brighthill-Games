import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Header from "../components/Header";
import MobileFooter from "../components/MobileFooter";
import "../components/styles/NotFound.css";
import "../components/styles/MediaQueries/NotFoundQuery.css";
import "../components/styles/Reusables.css";

function NotFound() {
  const navigate = useNavigate();

  console.log('not found')

  const goBack = () => {
    navigate(-1); // back to the prev page
  };

  return (
    <>
      <Nav />
      <Header />

      <div className="not-found-container flex-align flex-center">
        <div className="flex-col flex-align">
          <h1>Sorry, the page you were looking for was not found.</h1>
          <h2>
            <button className="go-back-btn btn-sm" onClick={goBack}><FaArrowLeft /> Go back</button>&nbsp;&nbsp; OR &nbsp;&nbsp;<Link to="/">return home</Link>
          </h2>
        </div>
      </div>

      <MobileFooter />
      <Footer />
    </>
  )
}

export default NotFound;
