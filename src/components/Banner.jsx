import React from 'react';
import '../styles/Banner/banner.scss'

const Banner = ({children}) => {
  return (
    <div className='banner'>
      {children}
    </div>
  );
};

export default Banner;