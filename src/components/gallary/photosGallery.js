import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Modal, Button, Icon } from 'semantic-ui-react';

import { photos as images } from './imagesData';

const PhotosGallery = (props) => {
    const { isOpen, setIsOpen } = props;
    return(
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        basic
        size="small"
      >
        <ImageGallery items={images} />
        <Modal.Actions>
          <Button color="green" onClick={() => setIsOpen(false)} inverted>
            <Icon name="backward" />
            {' '}
            Go Back
          </Button>
        </Modal.Actions>
      </Modal>
    )
};

export default PhotosGallery;