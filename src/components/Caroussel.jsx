import React, { useState } from 'react';
import '../styles/caroussel/caroussel.scss'

const Caroussel = ({image}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((index) => (index === image.length - 1 ? 0 : index + 1));
  };

  const prevImage = () => {
    setCurrentIndex((index) => (index === 0 ? image.length - 1 : index - 1));
  };


  let  currentImage = currentIndex+1
  let numberOfImages = image.length
 
  return (
    <div className='caroussel'>
      <div className="image">
        <img src={image[currentIndex]} alt="cover" />
        <div className="actionnable">
          <i className="fa-solid fa-chevron-left" onClick={prevImage}/>
          <p>{currentImage + "/" + numberOfImages}</p>
          <i className="fa-solid fa-chevron-right" onClick={nextImage}/>
        </div>
      </div>
    </div>
  );
};

export default Caroussel;