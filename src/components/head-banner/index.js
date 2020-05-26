import React from "react";
import { Image, Header, Icon, List } from 'semantic-ui-react'
import Typist from 'react-typist';

import "./index.css";
import detailList from "./detailList";

const HeadBanner = () => {
   return (
   <>
     <div className="head-banner">
        <Image className="profile-image" src={require('../../assets/atin.jpg')} size='medium' circular />
        <div className="content-container">
            <Header as='h1' size="massive" color='orange'>Atin Kumar Singh</Header>
            <Typist style={{margin: "0.6rem"}} cursor={{ show: false }}>
               <span style={{color: "#f2711c", fontSize: "1.3rem"}}> Hello, Welcome to my website! </span>
            </Typist>
            <List style={{margin: "0.8rem", color: "#e8eaf6", fontSize: "1.3rem"}} celled horizontal>
               {detailList.map((i) => <List.Item>{i.text}</List.Item>)}
            </List>
            <Icon className="pointer-icon" name="angle double down" color="orange" size="large" />
        </div>
     </div>
   </>
   )
}

export default HeadBanner;