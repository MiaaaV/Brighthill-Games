import React from 'react';
import './styles/Footer.css';

function Footer() {

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer-content'>
            <div className='footer-address'>
              <p>Brighthill Games Oy</p>
              <p>Jokukatu 123</p>
              <p>00100 Helsinki</p>
              <p>Finland</p>
            </div>
            <div>
              <p>© 2024 Brighthill Games, INC. All rights reserved</p>
            </div>
            <div>
              <p>Follow Brighthill Games on</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer