import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeadBanner from './components/head-banner';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <HeadBanner />
      <About />
    </div>
  );
}

export default App;
