import React from 'react';
import { Element } from 'react-scroll'
 
import './App.css';
import HeadBanner from './components/head-banner';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <HeadBanner />
      <Element id="about" name="about" className="element">
        <About />
      </Element> 
    </div>
  );
}

export default App;
