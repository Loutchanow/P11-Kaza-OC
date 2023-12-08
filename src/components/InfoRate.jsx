import React from 'react';
import '../styles/inforate/inforate.scss';
import InfoTags from './InfoTags';
import Star from './Star';


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
        <Star rating={rating}/>
      </div>
    </div>
  );
};

export default InfoRate;