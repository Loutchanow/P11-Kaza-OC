import React from 'react';
import Banner from '../components/Banner';
import ListOfCart from '../components/ListOfCart';
import banner from '../assets/Banner.png'


const Home = () => {


  return (
    <div>
      <Banner src={banner} title="Chez vous, partout et ailleurs" />
      <ListOfCart />
    </div>
  );
};

export default Home;