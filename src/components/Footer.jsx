import React from 'react';
import '../styles/footer/footer.scss'
import logoblanc from '../assets/logoblanc.png'



const Footer = () => {
  return (
    <div className='footer'>
      <img src={logoblanc} alt="logo" className='logo'/>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;<p>footer</p>