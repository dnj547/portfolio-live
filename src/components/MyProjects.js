import React, { Component } from 'react';

export default class MyProjects extends Component {
  render() {
    const allProjects = this.props.data.map(d=>{
      return (
        <button>{d.name}</button>
      )
    })
    return (
      <div>
        {allProjects}
      </div>
    )
  }
}
