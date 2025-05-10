import React, { Component } from 'react'

export class ClassComponent extends Component {
  constructor( props ){
    super();
    this.state = props;
  }
    render() {
    return (
      <div>hello {this.state.name} This is a <b>Class Component</b></div>
    )
  }
}

export default ClassComponent;