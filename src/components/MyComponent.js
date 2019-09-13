import React, { Component } from 'react';
import data from '../data/project_data.json'
import MyProjects from './MyProjects.js'

class MyComponent extends Component {
  render() {
    return (
      <div className="my-component">
        <div className="name-img-container">
          <h1>Danielle Jasper (she/her)</h1>
          <img src="/images/me_circle.png" alt="Danielle Jasper, Full-Stack Developer"/>
        </div>
        <div className="text-content">
          <h2>Who am I?</h2>
          <p>Hi, I'm Danielle. I'm a <a href="https://github.com/dnj547">full-stack software developer</a>, <a href="https://medium.com/@devdanielle">writer</a>, and recent graduate of Flatiron School.</p>
        </div>
      </div>
    );
  }
}

export default MyComponent;
