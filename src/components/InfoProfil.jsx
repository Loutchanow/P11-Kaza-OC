import React from 'react';
import '../styles/infoprofil/infoprofil.scss';

const InfoProfil = ({ infoprofil }) => {
  const [firstName, lastName] = infoprofil.name.split(' ');

  return (
    <div className='infoProfil'>
      <p>{firstName}<br />{lastName}</p>
      <img src={infoprofil.picture} alt="avatar" />
    </div>
  );
};

export default InfoProfil;