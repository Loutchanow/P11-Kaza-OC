import React from 'react';
import '../styles/info/info.scss'

const Info = ({info}) => {
  return (
    <div>
      <h1>{info.title}</h1>
    </div>
  );
};

export default Info;