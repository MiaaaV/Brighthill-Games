import React from 'react';
import Logo from '../images/logos/logo-white.png';
import Facebook from '../images/icons/facebook.png';
import Instagram from '../images/icons/instagram.png';
import Twitter from '../images/icons/twitter.png';
import YouTube from '../images/icons/youtube.png';
import './styles/MobileFooter.css';
import './styles/Reusables.css';
import '../App.css';

function MobileFooter() {

  return (
    <>
      <footer className='mobile-footer flex-col flex-align col-12'>

        <div className='flex-row flex-between col-11'>
          <img id='mobile-footer-logo' className='col-5' src={Logo} alt='Logo' />

          <div className='flex-col'>
            <p>Brighthill Games Oy</p>
            <p>Jokukatu 123</p>
            <p>00100 Helsinki</p>
            <p>Finland</p>
          </div>
        </div>

        <div className='flex-col col-11 flex-align'>
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

        <div className='flex-row text-align col-11'>
          <p>© 2024 Brighthill Games, INC. All rights reserved</p>
        </div>

      </footer>
    </>
  )
}

export default MobileFooter