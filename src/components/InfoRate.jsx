import React from 'react';
import '../styles/inforate/inforate.scss';
import InfoTags from './InfoTags';


const InfoRate = ({tags, rating}) => {
  return (
    <div className='inforate'>
      <div className="infotags"> 
      {tags.map((tag)=>(
        <div key={tag} className="tag">
          <InfoTags tag={tag} />
        </div>
        ))}
        </div>
      <div className="div">
        <p>{rating}</p>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
  );
};

export default InfoRate;