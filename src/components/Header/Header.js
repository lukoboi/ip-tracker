import React from 'react';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import './Header.scss';
import Input from './Input';

const Header = ({ ipValue, setIpValue, onClick, infoBars, disableInput }) => {
  return (
    <div className="Header" data-testid="Header">
      <header className="Header__header">
        <h1 className="Header__heading">IP Address Tracker test 10</h1>
        <Input
          ipValue={ipValue}
          setIpValue={setIpValue}
          onClick={onClick}
          disable={disableInput}
        />
      </header>
      <InfoDisplay infoBars={infoBars} />
    </div>
  );
};

export default Header;
