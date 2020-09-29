import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import MapDisplay from './components/Map/MapDisplay';

const App = () => {
  const [ipValue, setIpValue] = useState('');

  const fetchIpData = async () => {};

  const onClickHandler = () => {};

  return (
    <div className="App">
      <Header
        ipValue={ipValue}
        setIpValue={setIpValue}
        onClick={onClickHandler}
      />
      <MapDisplay />
    </div>
  );
};

export default App;
