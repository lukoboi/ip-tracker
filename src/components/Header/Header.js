import React from 'react';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import './Header.scss';

import Input from './Input';

const Header = () => {
  return (
    <div className="Header">
      <header className="Header__header">
        <h1 className="Header__heading">IP Address Tracker</h1>
        <Input />
      </header>
      <InfoDisplay />
    </div>
  );
};

export default Header;
