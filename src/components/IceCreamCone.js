import React, { Component } from 'react';

export default class IceCreamCone extends Component {
  render() {
    return (
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/06/02/22/14/ice-1432278_960_720.png" alt="ice cream cone" style={{top: this.props.top, left: this.props.left, position: "fixed", height: "200px"}}/>
      </div>
    )
  }
}
