import React from 'react';
import { Element } from 'react-scroll'
 
import './App.css';
import HeadBanner from './components/head-banner';
import About from './components/about';
import TechSkills from './components/skills';

function App() {
  return (
    <div className="App">
      <HeadBanner />
      <Element id="about" name="about" className="element">
        <About />
      </Element> 
      <Element id="skills" name="skills" className="element">
        <TechSkills />
      </Element>
    </div>
  );
}

export default App;
