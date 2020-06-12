import React from 'react'
import { Header, Grid, Card, Image } from 'semantic-ui-react';

import techSkillsData from './techSkills';

import './index.css';

const TechSkills = () => {
    return(
      <div className='Screen-Container'> 
        {' '}
        <Header as='h1' size='massive' color='orange'>Things that I know!</Header>
        <Grid centered className="tech-container">
          {techSkillsData.map((item) => (
            <Card target='_blank' rel='noopener noreferrer' href={item.url} className='skill-cards'>
              <Card.Content>
                <Image
                  size='mini'
                  src={item.imgUrl}
                />
                <Card.Header>{item.text}</Card.Header>
                <Card.Meta>{item.meta}</Card.Meta>
                <Card.Description>
                  {item.description}
                  {' '}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Grid>
      </div>
)
}

export default TechSkills;