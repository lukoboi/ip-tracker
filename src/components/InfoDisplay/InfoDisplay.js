import React from 'react';
import InfoBar from './InfoBar';
import './InfoDisplay.scss';

const InfoDisplay = ({ infoBars }) => {
  return (
    <div className="InfoDisplay">
      {infoBars.map(({ title, value }) => (
        <InfoBar key={title} title={title} text={value} />
      ))}
    </div>
  );
};

export default InfoDisplay;
