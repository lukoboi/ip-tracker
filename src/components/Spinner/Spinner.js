import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="Spinner" data-testid="Spinner">
      <div className="Spinner__ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
