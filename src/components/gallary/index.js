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
            <Card style={{background: 'silver'}} onClick={() => setGamesModal(true)} link>
              <Image src='https://steamuserimages-a.akamaihd.net/ugc/936061699592163947/CA4FE0C0F56B2DA171B48F0C6171D1863F8A44FF/' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Game Screenshots</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className='gallery-coloumn'>
            <Card style={{background: 'silver'}} onClick={() => setPhotosModal(true)} link>
              <Image src='https://drive.google.com/uc?export=download&id=1B4gxoifz1aXOMRdCsDrq7JQzX3nNm9WN' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Landscape Photos</Card.Header>
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
