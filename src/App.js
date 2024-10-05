import React from 'react';

import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import NextPage from './components/NextPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <NextPage />
    </div>
  );
}

export default App;
