import React from 'react';
import Banner from '../components/Banner';
import ListOfCart from '../components/ListOfCart';
import Footer from '../components/Footer';
import banner from '../assets/Banner.png'


const Home = () => {


  return (
    <div>
      <Banner src={banner} title="Chez vous, partout et ailleurs" />
      <ListOfCart />
      <Footer />
    </div>
  );
};

export default Home;