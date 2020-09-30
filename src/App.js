import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import MapDisplay from './components/Map/MapDisplay';
import useIpLocation from './hooks/useIpLocation';
import Spinner from './components/Spinner';

const App = () => {
  const [ipValue, setIpValue] = useState('');

  const {
    startLoading,
    loadingLocation,
    locationError,
    locationData,
    getIpLocationData,
  } = useIpLocation();

  if (startLoading) return <LoadingScreen />;

  return (
    <div className="App">
      {loadingLocation && <Spinner />}
      {locationError && <p>Location error</p>}
      <Header
        ipValue={ipValue}
        setIpValue={setIpValue}
        onClick={() => {
          getIpLocationData(ipValue);
          setIpValue('');
        }}
        infoBars={locationData?.infoBars}
      />
      <MapDisplay location={locationData?.location} />
    </div>
  );
};

export default App;
