import React from 'react';
import { Element } from 'react-scroll'
 
import './App.css';
import { Grid } from 'semantic-ui-react';
import HeadBanner from './components/head-banner';
import About from './components/about';
import TechSkills from './components/skills';
import Gallary from './components/gallary';
import ContactMe from './components/contact';

function App() {
  return (
    <div className="App">
      <Grid relaxed>
        <Grid.Row>
          <Grid.Column><HeadBanner /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Element id="about" name="about" className="element">
              <About />
            </Element>
            {' '}
 
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Element id="skills" name="skills" className="element">
              <TechSkills />
            </Element>
          </Grid.Column>
        </Grid.Row>     
        <Grid.Row>
          <Grid.Column>
            <Element id="gallery" name="gallery" className="element">
              <Gallary />
            </Element>
          </Grid.Column>
        </Grid.Row>     
        <Grid.Row>
          <Grid.Column>
            <Element id="contact" name="contact" className="element">
              <ContactMe />
            </Element>
          </Grid.Column>
        </Grid.Row>     
      </Grid>
    </div>
  );
}

export default App;
