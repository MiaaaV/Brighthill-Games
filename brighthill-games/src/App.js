import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Games from "./routes/Games";
import Careers from "./routes/Careers";
import About from "./routes/About";
import News from "./routes/News";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}

export default App;