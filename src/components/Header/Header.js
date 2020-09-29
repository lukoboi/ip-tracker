import React from 'react';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import './Header.scss';
import Input from './Input';

const Header = ({ ipValue, setIpValue, onClick }) => {
  return (
    <div className="Header">
      <header className="Header__header">
        <h1 className="Header__heading">IP Address Tracker</h1>
        <Input ipValue={ipValue} setIpValue={setIpValue} onClick={onClick} />
      </header>
      <InfoDisplay />
    </div>
  );
};

export default Header;
