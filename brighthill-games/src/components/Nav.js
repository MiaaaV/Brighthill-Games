import { NavLink } from "react-router-dom";
import Logo from "../images/logos/logo-white.png";

function Nav() {

  return (
    <>
      <div>
        <NavLink to="/">
          logo
          <img src={Logo} alt="Brighthill Games logo" />
        </NavLink>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/games">games</NavLink></li>
            <li><NavLink to="/careers">careers</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/news">news</NavLink></li>
          </ul>
        </nav>

        <div>
          social icons
        </div>
      </div>
    </>
  )
}

export default Nav;