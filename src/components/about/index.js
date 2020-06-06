import React from 'react'
import { Header, Container, Image, Grid } from 'semantic-ui-react';

import socialsList from './socialsList';

import './index.css'

const About = () => {
  return (
    <div id="about" className="head-banner">
      <Header as='h1' size='massive' color='orange'>About me!</Header>
      <Container text className='text-container'>
        <p>
          Hi! My name is Atin, although my family mostly call me Naman which is my pet name. 
          I am a 24 year old programmer and currently work as a software developer for a company called Primus software.
          I did my Bachelors of technology from Ajay Kumar Garg Engineering college, Ghaziabad.
          I was originally born in bareilly, but for the majority of my life I've been living in Noida.
        </p>
        <p>
          Apart from working on various programming projects, I like to spend my free time playing video games and reading Japnese comics or manga.
          I am also a big football fan and a diehard Real Madrid fan. My favourite player is Cristiano Ronaldo and I've lived through the greatest rivalry in football history i.e Ronaldo vs Messi.
          I also like to click photos of scenic beauty though I am pretty amateur at that. 
        </p>
        <p>
          My passion for programming started a couple of years ago, when I got to work on a friend's personal project built on React.
          I got intruiged by React and started reading articles on it's internal architecture which fascinated me a lot.
          After that I went on and loved trying different technologies.
        </p>
        <p>
          I hope you enjoy this website as much as I've enjoyed making it, and don't forget to check out my socials! 😁  
        </p>
        <Grid style={{marginTop: '0.5rem'}} centered>
          {socialsList.map((i) => (
            <Grid.Column>
              <a target='_blank' rel='noopener noreferrer' href={i.link}>
                <Image src={i.image}  />      
              </a>
            </Grid.Column>
        ))}
        </Grid>
      </Container>
    </div>
)
}

export default About;