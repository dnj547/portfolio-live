import React, { Component } from 'react';
import Typist from 'react-typist';

class MyComponent extends Component {

  state = {
    educationHover: false
  }

  toggleEducationHover = () => {
    this.setState({
      educationHover: !this.state.educationHover
    })
  }

  render() {
    return (
      <div className="my-component">
        <div className="me-img-container">
          <img src="/images/me_circle.png" alt="me"/>
        </div>
        <div className="text-content">
          <Typist cursor={{show:false}} avgTypingDelay={110}>
            <h1>Danielle Jasper</h1>
            <p>Hi, I'm Danielle.</p>
          </Typist>
          {this.state.educationHover ? (
            <div className="education"
              onMouseEnter={this.toggleEducationHover}
              onMouseLeave={this.toggleEducationHover}>
              <h1>Education</h1>
            </div>
            ) : (
            <div className="education"
              onMouseEnter={this.toggleEducationHover}
              onMouseLeave={this.toggleEducationHover}>
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
      </div>
    );
  }
}

export default MyComponent;
