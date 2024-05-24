import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import newsData from "../components/NewsData";
import BackToTopButton from "../components/TopBtn";
import "../components/styles/News.css";
import "../components/styles/Reusables.css";
import "../components/styles/MediaQueries/NewsQuery.css";
import "../App.css";
import MobileFooter from "../components/MobileFooter";

function News() {

  return (
    <>
      <BackToTopButton />
      <Nav />
      <Header />

      <div className="main-news-container flex-center flex-col flex-align">
        {newsData.map((news, index) => {
          const key = news.id || index;

          return (
            <div key={key} id="desktop-news" className="news-card flex-row col-8" >

              <div className="card-content flex-col flex-between flex-align">
                <div className="card-title-date col-11">
                  <h2 className="uppercase black">{news.title}</h2>
                  <small className="black">{news.date}</small>
                </div>

                <p className="black col-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="col-11">
                  <Link to={`/news/article/${encodeURIComponent(news.link)}`}>
                    <button className="news-btn btn-sm">Read now</button>
                  </Link>
                </div>
              </div>

              <img className="news-img col-5" src={news.image} alt="News content" />

            </div>
          );
        })}

        {/* MOBILE VIEW  */}

        <div id="mobile-news" className="flex-col">
          {newsData.map((news, index) => {
            const key = news.id || index;

            return (
              <Link to={`/news/article/${encodeURIComponent(news.link)}`} key={key}>
                <div className="news-card flex-row col-8">

                  <div className="card-content flex-col flex-between flex-align">
                    <div className="card-title-date col-11">
                      <h2 className="uppercase black">{news.title}</h2>
                      <small className="black">{news.date}</small>
                    </div>

                    <p className="black col-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>

                  </div>

                  <img className="news-img col-5" src={news.image} alt="News content" />

                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <MobileFooter />
      <Footer />
    </>
  )
}

export default News;