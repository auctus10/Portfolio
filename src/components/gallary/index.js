import React, { useState } from 'react'
import { Header, Grid, Card, Image } from 'semantic-ui-react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import './index.css';
import GamesGallery from './gamesGallery';
import PhotosGallery from './photosGallery';

const Gallary = () => {
  const [ gamesModal, setGamesModal] = useState(false);
  const [ photosModal, setPhotosModal ] = useState(false);

    return(
      <div className='Screen-Container'>
        <Header as='h1' size='massive' color='orange'>Here are some of the best Screenshots and Photos I have clicked !!</Header>
        <Grid>
          <Grid.Column className='gallery-coloumn'>
            <Card onClick={() => setGamesModal(true)} link>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Game Screenshots</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className='gallery-coloumn'>
            <Card onClick={() => setPhotosModal(true)} link>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Photos</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <GamesGallery isOpen={gamesModal} setIsOpen={setGamesModal} />
        <PhotosGallery isOpen={photosModal} setIsOpen={setPhotosModal} />
      </div>
    )
}

export default Gallary;
