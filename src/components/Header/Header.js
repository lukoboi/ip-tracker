import React from 'react';
import './Header.scss';

import Input from './Input';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__heading">IP Address Tracker</h1>
      <Input />
    </header>
  );
};

export default Header;
