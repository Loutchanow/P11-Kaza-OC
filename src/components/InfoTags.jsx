import React from 'react';
import '../styles/infotags/infotags.scss';

const InfoTags = ({ tag }) => {
  return (
    <div className="infotags">
        <p>{tag}</p>
    </div>
  );
};
export default InfoTags;
