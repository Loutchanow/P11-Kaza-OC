import React from 'react';
import '../styles/caroussel/caroussel.scss'

const Caroussel = ({image}) => {
  return (
    <div className='caroussel'>
      <img src={image.cover} alt="cover" />
    </div>
  );
};

export default Caroussel;