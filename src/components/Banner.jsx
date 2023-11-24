import React from 'react';
import banner from '../assets/Banner.png'
import '../styles/Banner/banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner} alt="banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;