import React, { useState, useEffect } from 'react';
import "../components/styles/TopBtn.css"

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && window.scrollY >= window.innerHeight * 0.8) {
        setIsVisible(true);
      } else if (isVisible && window.scrollY < window.innerHeight * 0.8) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={`back-to-top-button visible`}
          onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;