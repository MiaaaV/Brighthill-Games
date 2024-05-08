import { useLocation } from 'react-router-dom';
import "./styles/Header.css";
import "./styles/Reusables.css";

function Header() {
  const location = useLocation();
  let headerText = "";

  // decide header text based on the current page
  switch (location.pathname) {
    case "/careers":
      headerText = "Join Brighthill Games";
      break;
    case "/about":
      headerText = "We are Brighthill";
      break;
    default:
      headerText = "Page Not Found";
  }

  return (
    <>
      <header className="header-background">
        <div className="flex-center">
          <h1 className="uppercase header-heading header-font-size">{headerText}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
