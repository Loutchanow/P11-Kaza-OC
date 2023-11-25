import React from 'react';
import Banner from '../components/Banner';
import ListOfCart from '../components/ListOfCart';
import Footer from '../components/Footer';
import banner from '../assets/Banner.png'


const Home = () => {


  return (
    <div>
      <Banner>
        <img src={banner} alt="banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <ListOfCart />
      <Footer />
    </div>
  );
};

export default Home;