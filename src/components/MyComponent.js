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
    // console.log(data);
    const myProjects = data.map(d=>{
      return <MyProjects data={d} />
    })
    return (
      <div className="my-component">
        <div className="me-container">
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
          <Typist
            cursor={{show:false}}
            avgTypingDelay={90}
            onTypingDone={this.onDoneTypingHeader}>
            <h1>Danielle Jasper</h1>
          </Typist>
          {this.state.doneTypingHeader ? (
            <Typist
              cursor={{show:false}}
              avgTypingDelay={40}
              onTypingDone={this.onDoneTypingParagraph}>
              {/*Remove quotes before deploying. Single quote was screwing up my colors in Atom*/}
              <p>"Hi, I'm Danielle. I'm a full-stack software developer."</p>
            </Typist>
          ) : null}
          {this.state.doneTypingParagraph ? (
            <BouncyDiv>
              <div
                onMouseEnter={this.toggleEducationHover}
                onMouseLeave={this.toggleEducationHover}>
                {!this.state.educationHover ? (
                  <div className="education">
                    <h1>Education</h1>
                  </div>
                  ) : (
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
                  )}
              </div>
            </BouncyDiv>
          ) : null}
          <br/>
          {this.state.doneWithEducation ? (
            <BouncyDiv>
              <div
                onMouseEnter={this.toggleSkillsHover}
                onMouseLeave={this.toggleSkillsHover}>
                {!this.state.skillsHover ? (
                  <div className="skills">
                    <h1>Skills</h1>
                  </div>
                  ) : (
                  <div className="skills">
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original-wordmark colored"></i>
                    <i class="devicon-ruby-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                    <i class="devicon-html5-plain-wordmark colored"></i>
                  </div>
                  )}
              </div>
            </BouncyDiv>
          ) : null}
          <br/>
          {this.state.doneWithSkills ? (
            <BouncyDiv>
              <div
                onMouseEnter={this.toggleProjectsHover}
                onMouseLeave={this.toggleProjectsHover}>
                {!this.state.projectsHover ? (
                  <div className="projects">
                    <h1>Projects</h1>
                  </div>
                  ) : (
                  <div className="projects">
                    {myProjects}
                  </div>
                  )}
              </div>
            </BouncyDiv>
          ) : null}
        </div>
      </div>
    );
  }
}

export default MyComponent;
