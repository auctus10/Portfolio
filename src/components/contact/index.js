import React from 'react';
// import { animateScroll as scroll } from 'react-scroll'
import { Header, Container, Button, Icon } from 'semantic-ui-react';

import Atin from '../../assets/atin.pdf';

import './index.css'

const ContactMe = () => {
    return(
      <>
        <div className="Screen-Container">
          <Header as='h1' size='massive' color='orange'>Reach out to me!</Header>
          <Container text className='text-container'>
            <p style={{margin: 'auto'}}>Get in touch with me by e-mailing me at:</p>
            <p><a href="mailto: atin1996io@gmail.com">atin1996io@gmail.com</a></p>
          </Container>
          <Header as='h3' size='massive' color='orange'>Check Out my CV!</Header>
          <Button style={{ marginBottom: '2rem', backgroundColor: 'darkgray'}} icon labelPosition='left'> 
            {' '}
            <Icon name='download' />
            <a href={Atin} style={{color: 'currentColor'}} download="Atin.pdf">Download CV</a>
          </Button>
          {/* <Button
            circular
            icon='angle up' 
            onClick={() => scroll.scrollToTop()}
          /> */}
        </div>
       
      </>
    )
}

export default ContactMe