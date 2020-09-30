import React from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <div className="LoadingScreen" data-testid="LoadingScreen">
      <h1 className="LoadingScreen__title">Fetching your IP</h1>
    </div>
  );
};

export default LoadingScreen;
