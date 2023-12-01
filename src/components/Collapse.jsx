import React, { useState } from 'react';
import '../styles/collapse/collapse.scss';

const Collapse = ({ title, content }) => {
  const [isClosed, setIsClosed] = useState(true);

  const handleToggle = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className={`collapse ${isClosed ? 'closed' : 'open'}`}>
      <div className="header" onClick={handleToggle}>
        <span className="title">{title}</span>
        <span className="checked">^</span>
      </div>
      {!isClosed && (
        <div className="content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
