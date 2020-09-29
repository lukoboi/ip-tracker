import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import MapDisplay from './components/Map/MapDisplay';

import { IP_DATA } from './Test/TestData/MockIpData';
import { extractIpData } from './helpers/transformData';

const App = () => {
  const [ipValue, setIpValue] = useState('');
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [infoBars, setInfoBars] = useState([]);

  const fetchIpData = () => {
    return extractIpData(IP_DATA);
  };

  const onClickHandler = async () => {
    // simulate fetching the data for now
    const { location, infoBars } = await fetchIpData();
    setLocation(location);
    setInfoBars(infoBars);
  };

  return (
    <div className="App">
      <Header
        ipValue={ipValue}
        setIpValue={setIpValue}
        onClick={onClickHandler}
        infoBars={infoBars}
      />
      <MapDisplay />
    </div>
  );
};

export default App;
