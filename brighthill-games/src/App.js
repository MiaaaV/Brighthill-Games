import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Home from "./routes/Home";
import Games from "./routes/Games";
import Careers from "./routes/Careers";
import About from "./routes/About";
import News from "./routes/News";
import Game from "./routes/Game";
import JobInfo from './routes/JobInfo';
import './App.css';

function App() {

  const location = useLocation();

  useEffect(() => {
    // scrolls to desired #id if Link has one, otherwise scrolls to the top of the page
    if (location.pathname && !location.pathname.includes('/:id')) {
      if (location.hash) {
        const targetId = location.hash.substring(1); // removes #
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navHeight = 144;
          const sectionTop = targetElement.getBoundingClientRect().top;
          const offset = sectionTop + window.scrollY - navHeight;
          animateScroll.scrollTo(offset, {
            smooth: true,
            duration: 300
          });
        }
      } else {
        animateScroll.scrollToTop({
          smooth: true,
          duration: 300
        });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/:id" element={<Game />} />
      <Route path="/jobinfo/:jobTitle" element={<JobInfo />} />
    </Routes>
  )
}

export default App;