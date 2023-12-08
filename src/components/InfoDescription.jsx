import React from 'react';
import '../styles/infodescription/infodescription.scss';
import Collapse from './Collapse';

const InfoDescription = ({ description, equipments }) => {
  return (
    <div className="infodescription">
      <Collapse title="Description" content={description} />
      <Collapse title="Équipements" content={<div>{equipments.map((equipment, index) => (
        <p key={index}>{equipment}</p>))}</div>}/>
    </div>
  );
};

export default InfoDescription;
