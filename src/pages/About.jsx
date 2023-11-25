import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import banner from '../assets/banner2.png'


const About = () => {
  return (
    <div>
      <h1>about</h1>
      <Banner>
        <img src={banner} alt="banner" />
      </Banner>
      <Footer />
    </div>
  );
};

export default About;