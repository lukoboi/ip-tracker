import React from 'react';
import InfoBar from './InfoBar';
import './InfoDisplay.scss';

const InfoDisplay = ({ infoBars = [] }) => {
  if (infoBars.length === 0) return null;

  return (
    <div className="InfoDisplay" data-testid="InfoDisplay">
      {infoBars.map(({ title, value }) => (
        <InfoBar key={title} title={title} text={value} />
      ))}
    </div>
  );
};

export default InfoDisplay;
