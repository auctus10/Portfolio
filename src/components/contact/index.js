import React from 'react';
import { Header, Container } from 'semantic-ui-react';

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
        </div>
       
      </>
    )
}

export default ContactMe