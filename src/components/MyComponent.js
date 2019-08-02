import React, { Component } from 'react';
import Typist from 'react-typist-updated';
import { bounceIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const bounceInAnimation = keyframes`${bounceIn}`;
const BouncyDiv = styled.div`animation: 1s ${bounceInAnimation};`;

class MyComponent extends Component {

  state = {
    doneTyping: false,
    educationHover: false
  }

  toggleEducationHover = () => {
    this.setState({
      educationHover: !this.state.educationHover
    })
  }

  onDoneTyping = () => {
    this.setState({
      doneTyping: true
    })
  }

  render() {
    return (
      <div className="my-component">
        <div className="me-img-container">
          <img src="/images/me_circle.png" alt="me"/>
        </div>
        <div className="text-content">
          <Typist
            cursor={{show:false}}
            avgTypingDelay={110}
            onTypingDone={this.onDoneTyping}>
            <h1>Danielle Jasper</h1>
            <p>Hi, I'm Danielle.</p>
          </Typist>
          {this.state.doneTyping ? (
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
        </div>
      </div>
    );
  }
}

export default MyComponent;
