import React, { Component } from 'react';
// import Typist from 'react-typist-updated';
// import { bounceIn } from 'react-animations'
// import styled, { keyframes } from 'styled-components';
import SocialMediaIcons from 'react-social-media-icons';
import data from '../data/project_data.json'
import MyProjects from './MyProjects.js'

// const bounceInAnimation = keyframes`${bounceIn}`;
// const BouncyDiv = styled.div`animation: 1s ${bounceInAnimation};`;

const socialMediaIcons = [
  {
    url: 'https://www.linkedin.com/in/daniellejasper/',
    className: 'fab fa-linkedin'
  },
  {
    url: 'https://github.com/dnj547',
    className: 'fab fa-github-square'
  },
  {
    url: 'https://medium.com/@devdanielle',
    className: 'fab fa-medium'
  },
];

class MyComponent extends Component {

  render() {
    const myProjects = data.map(d=>{
      return <MyProjects data={d} />
    })
    return (
      <div className="my-component">
        <div className="me-container">
          <h1>Danielle Jasper</h1>
          <img src="/images/me_circle.png" alt="Danielle Jasper, Full-Stack Developer"/>
          <SocialMediaIcons
            className="icons"
            icons={socialMediaIcons}
            iconSize={'100em'}
            iconColor={'palevioletred'}
          />
          <p className="me-text">Hi, I'm Danielle. I'm a full-stack software developer, writer, and recent graduate of Flatiron School.</p>
        </div>
        <div className="text-content">
          <h2 className="work-in-progress">FYI, this website is a work in progress :)</h2>
          <div className="sections">
            <div className="section">
              <h1>Education:</h1>
              <div className="education">
                <div className="fs-container">
                  <img className="fs-img" src="/images/fs-cutout.png" alt="Flatiron School"/>
                  <p>Software Engineering</p>
                </div>
                <div className="lsu-container">
                  <img className="lsu-img" src="/images/lsu.png" alt="Louisiana State University"/>
                  <p>Accounting</p>
                </div>
              </div>
            </div>
            <br/>
              <div className="section">
                <h1>Skills:</h1>
                <div className="skills">
                  <i class="devicon-javascript-plain colored"></i>
                  <i class="devicon-react-original-wordmark colored"></i>
                  <i class="devicon-ruby-plain-wordmark colored"></i>
                  <i className="devicon-css3-plain-wordmark colored"></i>
                  <i class="devicon-html5-plain-wordmark colored"></i>
                </div>
              </div>
            <br/>
            <div className="section">
              <h1>Projects:</h1>
              <div className="projects">
                {myProjects}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
