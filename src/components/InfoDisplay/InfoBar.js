import React from 'react';
import './InfoBar.scss';

const InfoBar = ({ title, text }) => {
  return (
    <div className="InfoBar" data-testid="InfoBar">
      <h4 className="InfoBar__h4">{title}</h4>
      <h2 className="InfoBar__h2">{text}</h2>
    </div>
  );
};

export default InfoBar;
