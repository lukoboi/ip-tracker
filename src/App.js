import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import MapDisplay from './components/Map/MapDisplay';
import { extractIpData } from './helpers/transformData';
import {
  IP_ENDPOINT,
  IP_LOCATION_API_KEY,
  IP_LOCATION_ENDPOINT,
} from './config';

const App = () => {
  const [startupLoading, setStartupLoading] = useState(true);
  const [ipValue, setIpValue] = useState('');
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [infoBars, setInfoBars] = useState([]);

  const fetchIpData = async (ipAddress) => {
    try {
      const ipData = await fetch(
        `${IP_LOCATION_ENDPOINT}?apiKey=${IP_LOCATION_API_KEY}&ipAddress=${ipAddress}`
      ).then((res) => res.json());

      if (ipData.code === 422) throw new Error('Invalid IP Address');

      const { location, infoBars } = extractIpData(ipData);
      setLocation(location);
      setInfoBars(infoBars);
    } catch (error) {
      console.log('Handle error with msg', error.message);
    }
  };

  const getCurrentIP = async () => {
    setStartupLoading(true);
    const { ip } = await fetch(`${IP_ENDPOINT}?format=json`).then((res) =>
      res.json()
    );
    fetchIpData(ip);
    setStartupLoading(false);
  };

  useEffect(() => {
    getCurrentIP();
  }, []);

  const onClickHandler = async () => {
    await fetchIpData(ipValue);
    setIpValue('');
  };

  if (startupLoading) return <LoadingScreen />;

  return (
    <div className="App">
      <Header
        ipValue={ipValue}
        setIpValue={setIpValue}
        onClick={onClickHandler}
        infoBars={infoBars}
      />
      <MapDisplay location={location} />
    </div>
  );
};

export default App;
