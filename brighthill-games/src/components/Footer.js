import React from 'react';
import './styles/Footer.css';
import '../App.css';
import Facebook from '../images/icons/facebook.png';
import Instagram from '../images/icons/instagram.png';
import Twitter from '../images/icons/twitter.png';
import Youtube from '../images/icons/youtube.png';

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

              <ul className='icon-list'>
                <a href='#'>
                  <img src={Twitter} id='twitter' alt='Twitter icon' className='social-icons'/>
                </a>
                <a href='#'>
                  <img src={Instagram} id='Instagram' alt='Instagram icon' className='social-icons'/>
                </a>
                <a href='#'>
                  <img src={Facebook} id='facebook' alt='Facebook icon' className='social-icons'/>
                </a>
                <a href='#'>
                  <img src={Youtube} id='youtube' alt='Youtube icon' className='social-icons'/>
                </a>
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