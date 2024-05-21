import { useLocation } from 'react-router-dom';
import "./styles/Header.css";
import './styles/MediaQueries/HeaderQuery.css';
import "./styles/Reusables.css";

function Header() {
  const location = useLocation();
  let headerText = "";

  const match = location.pathname.match(/^\/title\/(.+)$/);
  const jobTitle = match ? decodeURIComponent(match[1].replace(/-/g, ' ')) : null;
  const newsArticle = location.pathname.startsWith('/news/article/');

  // decide header text based on the current page
  if (match) {
    headerText = `${jobTitle}`;
  } else if (newsArticle) {
    const articleTitle = location.pathname.split('/').pop().replace(/-/g, ' ');
    headerText = articleTitle;

  } else {
    // Decide header text based on other pages
    switch (location.pathname) {
      case "/careers":
        headerText = "Join Brighthill Games";
        break;
      case "/about":
        headerText = "We are Brighthill";
        break;
      case "/news":
        headerText = "News";
        break;
      default:
        headerText = "Page Not Found";
    }
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
