import React from 'react';
import './Input.scss';
import { ReactComponent as ArrowIcon } from '../../images/icon-arrow.svg';

const Input = ({ ipValue, setIpValue, onClick }) => {
  return (
    <div className="Input">
      <input
        className="Input__input"
        type="text"
        value={ipValue}
        onChange={(e) => setIpValue(e.target.value)}
        placeholder="Enter an IP Address"
      />
      <button
        className="Input__button"
        onClick={onClick}
        disabled={ipValue === ''}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Input;
