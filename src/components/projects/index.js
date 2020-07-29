import React, {useState, useEffect} from 'react'
import { Header, Grid, Card, Image } from 'semantic-ui-react';
import axios from 'axios';

import githubImg from '../../assets/github-icon.webp';
import './index.css';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
 
  const fetchRepos = async () => {
    const data = await axios.get('https://api.github.com/users/auctus10/repos');

    setGithubRepos(data.data);
  }
 
  useEffect(() => { fetchRepos();},[]);

    return(
      <>
        <div className="Screen-Container">
          <Header as='h1' size='massive' color='orange'>Projects that I have done!</Header>
          <Grid className='project-container'>
            {githubRepos &&  githubRepos.map(item => (
              <Card key={item.id} target='_blank' rel='noopener noreferrer' href={item.html_url} className='project-cards'>
                <Card.Content>
                  <Image
                    style={{marginBottom: '1rem'}}
                    size='mini'
                    src={githubImg}
                  />
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Meta>{item.full_name}</Card.Meta>
                  <Card.Description>
                    {item.description}
                    {' '}
                  </Card.Description>
                </Card.Content>
              </Card>
              ))}
          </Grid>
        </div>
      </>
    );
}

export default Projects;