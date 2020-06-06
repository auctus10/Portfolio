import React from "react";
import { Image, Header, Icon, List } from 'semantic-ui-react'
import { Link, animateScroll as scroll } from "react-scroll";
import Typist from 'react-typist';

import "./index.css";
import detailList from "./detailList";

const HeadBanner = () => {
   return (
     <>
       <div className="head-banner">
         <Image className="profile-image" src={require('../../assets/atin.jpg')} size='medium' circular />
         <div className="content-container">
           <Header style={{fontSize: "2.5rem", cursor: "context-menu"}} as='h1' size="massive" color='orange'>Atin Kumar Singh</Header>
           <Typist style={{margin: "0.6rem"}} cursor={{ show: false }}>
             <span style={{color: "white", fontSize: "1.3rem", cursor: "context-menu"}}>
               console.
               <span style={{color:"#3182ce"}}>log</span>
               (
               <span style={{color: "#f2711c", fontSize: "1.3rem"}}> Hello, Welcome to my website! </span>
               );
             </span>
           </Typist>
           <List style={{margin: "1rem", color: "#e8eaf6"}} horizontal>
             {detailList.map((i, index) =>   (
               <>
                 {index === 0 ? "": <span style={{cursor: "context-menu"}} className="screen-links">|</span>}
                 <Link
                   to={i.link}
                   spy
                   smooth
                   offset={-70}
                   duration={500}
                 >
                   <List.Item className="screen-links" as="a">{i.text}</List.Item>
                 </Link>
               </>
))}
           </List>
           <Link
             activeClass="active"
             to="about"
             spy
             smooth
             offset={-70}
             duration={500}
           >
             {' '}
             <Icon className="pointer-icon" name="angle double down" color="orange" size="large" />
           </Link>
         </div>
       </div>
     </>
   )
}

export default HeadBanner;