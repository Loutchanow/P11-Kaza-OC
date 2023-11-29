import React from 'react';
import '../styles/Banner/banner.scss'

const Banner = ({src, title}) => {
  return (
    <div className='banner'>
         <img src={src} alt="banner" />
        {!!title && <h1>{title}</h1> }
    </div>
  );
};

export default Banner;