import React from 'react';
import Facebook from '../images/icons/facebook.png';
import Instagram from '../images/icons/instagram.png';
import Twitter from '../images/icons/twitter.png';
import YouTube from '../images/icons/youtube.png';
import './styles/Footer.css';
import './styles/Reusables.css';
import '../App.css';

function Footer() {

  return (
    <>
      <footer id='desktop-footer' className='desktop-footer'>
        <div className='flex-row flex-between'>

          <div className='desktop-contact-info flex-col'>
            <p>Brighthill Games Oy</p>
            <p>Jokukatu 123</p>
            <p>00100 Helsinki</p>
            <p>Finland</p>
          </div>

          <div className='desktop-follow flex-row'>
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

        <div className='desktop-copyright flex-row flex-center'>
          <p>© 2024 Brighthill Games, INC. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer