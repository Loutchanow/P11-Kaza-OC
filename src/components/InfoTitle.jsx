import React from 'react';


const InfoTitle = ({title, location}) => {
  return (
    <div className='infotitle'>
      <h1>{title}</h1>
      <h4>{location}</h4>
    </div>
  );
};

export default InfoTitle;