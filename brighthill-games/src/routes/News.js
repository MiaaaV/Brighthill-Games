import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../components/styles/News.css";
import "../components/styles/Reusables.css";
import "../App.css";
import NewsImage1 from "../images/news/news1.png";
import NewsImage2 from "../images/news/news2.png";
import NewsImage3 from "../images/news/news3.png";
import NewsImage4 from "../images/news/news4.jpg";
import { Link } from "react-router-dom";

function News() {

  const newsData = [
    {
      title: "EoD - Behind the scenes",
      date: "11.4.2024",
      link: "/#",
      image: NewsImage1
    },
    {
      title: "Making lady Veronica",
      date: "26.3.2024",
      link: "/#",
      image: NewsImage2
    },
    {
      title: "2024 Awards nominee",
      date: "6.3.2024",
      link: "/#",
      image: NewsImage3
    },
    {
      title: "We are hiring",
      date: "15.12.2023",
      link: "/#",
      image: NewsImage4
    },
  ]

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
                <Link to={news.link}>
                  <button id="btn-sm" className="news-btn">Read now</button>
                </Link>
              </div>
            </div>

            <img className="news-img col-5" src={news.image} />

          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default News;