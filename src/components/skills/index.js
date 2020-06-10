import React from 'react'
import { Header, Grid, Card } from 'semantic-ui-react';

const TechSkills = () => {
    return(
      <div> 
        {' '}

        <Header as='h1' size='massive' color='orange'>Things that I know!</Header>
        <Grid className="Screen-Container">
          <Grid.Column style={{width: 'auto'}}>
            <Grid.Row>
              <Card
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column style={{width: 'auto'}}>
            <Grid.Row>
              <Card
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column style={{width: 'auto'}}>
            <Grid.Row>
              <Card
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
)
}

export default TechSkills;