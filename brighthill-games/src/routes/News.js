import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../components/styles/News.css";
import "../components/styles/Reusables.css";
import "../App.css";
import { Link } from "react-router-dom";
import newsData from "../components/NewsData";

function News() {

  return (
    <>
      <Nav />
      <Header />

      <div className="main-news-container flex-center flex-col flex-align">
        {newsData.map((news, index) => (
          <div className="news-card flex-row col-8" key={index}>

            <div className="card-content flex-col col-8 flex-between">
              <div className="card-title-date">
                <h2 className="uppercase black">{news.title}</h2>
                <small className="black">{news.date}</small>
              </div>

              <p className="black col-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>

              <div>
                <Link to={`/news/article/${encodeURIComponent(news.link)}`}>
                  <button id="btn-sm" className="news-btn">Read now</button>
                </Link>
              </div>
            </div>

            <img className="news-img col-5" src={news.image} alt="News content" />

          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default News;