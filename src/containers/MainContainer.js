import React, { Component } from 'react';
import MyComponent from "../components/MyComponent";

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <MyComponent />
      </div>
    );
  }
}

export default MainContainer;
