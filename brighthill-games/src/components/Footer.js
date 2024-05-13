import React from 'react';
import './styles/Footer.css';
import '../App.css';
import Facebook from '../images/icons/facebook.png';
import Instagram from '../images/icons/instagram.png';
import Twitter from '../images/icons/twitter.png';
import YouTube from '../images/icons/youtube.png';

function Footer() {

  return (
    <>
      <footer>
        <div className='footer-content'>

          <div className='footer-address'>
            <p>Brighthill Games Oy</p>
            <p>Jokukatu 123</p>
            <p>00100 Helsinki</p>
            <p>Finland</p>
          </div>

          <div className='footer-follow-icons'>

            <div>
              <p>Follow Brighthill Games on</p>
            </div>

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

          </div>
        </div>

        <div className='footer-copyright'>
          <p>© 2024 Brighthill Games, INC. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer