import React, { Component } from 'react';
import Typist from 'react-typist-updated';
import { bounceIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';
import SocialMediaIcons from 'react-social-media-icons';
import data from '../data/project_data.json'
import MyProjects from './MyProjects.js'

const bounceInAnimation = keyframes`${bounceIn}`;
const BouncyDiv = styled.div`animation: 1s ${bounceInAnimation};`;

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

  state = {
    doneTypingHeader: false,
    doneTypingParagraph: false,
    educationHover: false,
    doneWithEducation: false,
    skillsHover: false,
    doneWithSkills: false,
    projectsHover: false
  }

  toggleEducationHover = () => {
    this.setState({
      educationHover: !this.state.educationHover
    })
  }

  toggleSkillsHover = () => {
    this.setState({
      skillsHover: !this.state.skillsHover
    })
  }

  toggleProjectsHover = () => {
    this.setState({
      projectsHover: !this.state.projectsHover
    })
  }

  onDoneTypingHeader = () => {
    this.setState({
      doneTypingHeader: true
    })
  }

  onDoneTypingParagraph = () => {
    this.setState({
      doneTypingParagraph: true
    })
    setTimeout(() => {
      this.setState({doneWithEducation: true});
    }, 1000)
    this.onDoneWithSkills()
  }

  onDoneWithSkills = () => {
    setTimeout(() =>{
      this.setState({doneWithSkills: true});
    }, 2000)
  }

  render() {
    console.log('state', this.state);
    const myProjects = data.map(d=>{
      return <MyProjects data={d} />
    })
    return (
      <div className="my-component">
        <div className="me-container">
          <Typist
            cursor={{show:false}}
            avgTypingDelay={90}
            onTypingDone={this.onDoneTypingHeader}>
            <h1>Danielle Jasper</h1>
          </Typist>
          <img src="/images/me_circle.png" alt="Danielle Jasper, Full-Stack Developer"/>
          <SocialMediaIcons
            className="icons"
            icons={socialMediaIcons}
            iconSize={'100em'}
            iconColor={'palevioletred'}
          />
        </div>
        <div className="text-content">
          <h2 className="work-in-progress">FYI, this website is a work in progress :)</h2>

          {this.state.doneTypingHeader ? (
            <Typist
              cursor={{show:false}}
              avgTypingDelay={40}
              onTypingDone={this.onDoneTypingParagraph}>
              <p>Hi, I'm Danielle. I'm a full-stack software developer.</p>
            </Typist>
          ) : null}
          {this.state.doneTypingParagraph ? (
            <BouncyDiv>
              <div className="section">
                <h1>Education:</h1>
                <div className="fs-container">
                  <img className="fs-img" src="/images/fs-cutout.png" alt="Flatiron School"/>
                  <p>Software Engineering</p>
                </div>
                <div className="lsu-container">
                  <img className="lsu-img" src="/images/lsu.png" alt="Louisiana State University"/>
                  <p>Accounting</p>
                </div>
              </div>
            </BouncyDiv>
          ) : null}
          <br/>
          {this.state.doneWithEducation ? (
            <BouncyDiv>
              <div className="section">
                <h1>Skills:</h1>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-ruby-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
              </div>
            </BouncyDiv>
          ) : null}
          <br/>
          {this.state.doneWithSkills ? (
            <BouncyDiv>
                <div className="section">
                  <h1>Projects:</h1>
                  {myProjects}
                </div>
            </BouncyDiv>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MyComponent;
