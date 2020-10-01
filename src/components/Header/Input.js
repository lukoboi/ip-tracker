import React from 'react';
import './Input.scss';
import { ReactComponent as ArrowIcon } from '../../images/icon-arrow.svg';

const Input = ({ ipValue, setIpValue, onClick, disable }) => {
  return (
    <div className="Input">
      <input
        className="Input__input"
        type="text"
        value={ipValue}
        onChange={(e) => setIpValue(e.target.value)}
        placeholder="Enter an IP Address"
        disabled={disable}
      />
      <button
        className="Input__button"
        onClick={onClick}
        disabled={ipValue === '' || disable}
        data-testid="InputButton"
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Input;
