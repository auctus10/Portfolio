import React from 'react';
import { Image, Header, Icon, List } from 'semantic-ui-react'
import { Link } from 'react-scroll';
import Typist from 'react-typist';

import './index.css';
import detailList from './detailList';
import ProfilePhoto from '../../assets/profilepic.jpg'

const HeadBanner = () => {
   return (
     <>
       <div className="head-banner">
         <Image className="profile-image" src={ProfilePhoto} size='medium' circular />
         <div className="content-container">
           <Header style={{fontSize: 'calc(1.5rem + 1vh)', cursor: 'context-menu'}} as='h1' size="massive" color='orange'>Atin Kumar Singh</Header>
           <Typist style={{margin: '0.6rem'}} cursor={{ show: false }}>
             <span style={{color: 'white', fontSize: 'calc(0.75rem + 1vmin)', cursor: 'context-menu'}}>
               console.
               <span style={{color:'#3182ce', fontSize: 'calc(0.75rem + 1vmin)'}}>log</span>
               (
               <span style={{color: '#f2711c', fontSize: 'calc(0.75rem + 1vmin)'}}> Hello, Welcome to my website! </span>
               );
             </span>
           </Typist>
           <List style={{marginTop: '1rem', color: '#e8eaf6'}} horizontal>
             {detailList.map((i, index) =>   (
               <>
                 {index === 0 ? '': <span style={{cursor: 'context-menu'}} className="screen-links">|</span>}
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