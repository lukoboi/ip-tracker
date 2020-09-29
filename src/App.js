import React from 'react';
import './App.scss';

import Header from './components/Header';
import MapDisplay from './components/Map/MapDisplay';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MapDisplay />
    </div>
  );
};

export default App;
