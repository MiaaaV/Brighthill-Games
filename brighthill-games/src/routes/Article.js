import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Header from "../components/Header";
import newsData from "../components/NewsData";
import Twitter from "../images/icons/twitter.png";
import Instagram from "../images/icons/instagram.png";
import Facebook from "../images/icons/facebook.png";
import YouTube from "../images/icons/youtube.png";
import { FaArrowLeft } from "react-icons/fa";
import '../components/styles/Game.css';
import '../components/styles/Reusables.css';
import "../components/styles/Article.css";
import "../components/styles/Reusables.css";

function Article() {

  const location = useLocation()

  let { articleId } = useParams()
  const news = newsData.find(news => news.link === articleId);

  return (
    <>
      <Nav />
      <Header />

      <div className="article-container flex-center">
        <div className="flex-col col-8">

          <Link to="/news">
            <div id="back-to-news" className="flex-row">
              <FaArrowLeft className="font-2" />
              <p className="uppercase font-2">news</p>
            </div>
          </Link>

          <div className="grid-1-2 col-12">
            <div className="article-info grid-2-1">
              <p className="font-2 col-11">{news.text1}</p>

              <img id="article-img" src={news.image} alt="news image" />
            </div>

            <p className="font-2">{news.text2}</p>
          </div>

          <div className="flex-row flex-between">
            <ul className="icon-list">
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={Twitter} id="facebook" className="social-icons" alt="Twitter icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} id="facebook" className="social-icons" alt="Instagram icon" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} id="facebook" className="social-icons" alt="Facebook icon" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src={YouTube} id="facebook" className="social-icons" alt="YouTube icon" />
                </a>
              </li>
            </ul>

            <small className="white">Brighthill Games {news.date}</small>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Article;