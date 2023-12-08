import React, { useState } from 'react';
import '../styles/collapse/collapse.scss';

const Collapse = ({ title, content }) => {
  const [isClosed, setIsClosed] = useState(true);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };
  const isOpenClass = isClosed ? 'closed' : 'open'

  return (
    <div className={`collapse ${isOpenClass}`}>
      <div className="header" onClick={handleToggle}>
        <span className="title">{title}</span>
        <span className='checked'><i className="fa-solid fa-chevron-up"/></span>
      </div>
      {!isClosed && (
        <div className={`content ${isOpenClass}`}>
          <div className='text'>{content}</div>
        </div>
      )}
    </div>
  );
};

export default Collapse;

