import React from 'react';
import './Input.scss';
import { ReactComponent as ArrowIcon } from '../../images/icon-arrow.svg';

const Input = () => {
  return (
    <div className="Input">
      <input className="Input__input" type="text" />
      <button className="Input__button">
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Input;
