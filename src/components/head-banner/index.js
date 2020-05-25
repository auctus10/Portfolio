import React from "react";
import { Image, Header } from 'semantic-ui-react'

import "./index.css";

const HeadBanner = () => {
   return (
   <>
    
     <div className="head-banner">
        <Image className="profile-image" src={require('../../assets/atin.jpg')} size='medium' circular />
        <Header as='h2' color='orange'>Atin Kumar Singh</Header>
     </div>
   </>
   )
}

export default HeadBanner;