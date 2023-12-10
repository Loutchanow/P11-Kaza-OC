import React from 'react';
import '../styles/info/info.scss'
import InfoProfil from './InfoProfil';
import InfoTitle from './InfoTitle';
import InfoDescription from './InfoDescription';
import InfoRate from './InfoRate';

const Info = ({info}) => {
  return (
    <main className='allInfo'>
      <div className='infoBasic'>
        <InfoTitle title={info.title} location={info.location} tag={info.tag}/>
        <InfoProfil infoprofil={info.host}/>
      </div>
      <div className='infoRate'>
        <InfoRate tags={info.tags} rating={info.rating}/>
      </div>
      <div className='infoDescription'>
        <InfoDescription description={info.description} equipments={info.equipments}/>
      </div>
    </main>
  );
};

export default Info;