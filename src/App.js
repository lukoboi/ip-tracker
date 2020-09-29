import React from 'react';
import './App.scss';

import Header from './components/Header';
import MapDisplay from './components/Map/MapDisplay';

const App = () => {
  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__map">
        <MapDisplay />
      </div>
    </div>
  );
};

export default App;
