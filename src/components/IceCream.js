import React, { Component } from 'react'
import { Link } from "react-router-dom";
import IceCreamCone from './IceCreamCone';
import '../css/iceCream.css'

export default class IceCream extends Component {
  constructor(props){
    super(props)
    this.state = {
      cones: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }
  
  handleClick(){
    this.setState(st => 
      st.cones = [...st.cones, {top: this.getRandom(), left: this.getRandom()}]
    )
  }

  getRandom(){
    return Math.floor(Math.random()*90) + '%';
  }

  render() {
    let cones = this.state.cones.map(cone =>
      <IceCreamCone top= {cone.top} left= {cone.left}/>
    )
    
    return (
      <div className="container">
        <h1>Ice Cream</h1>
        <p>Go to <Link to="/">Vending Machine</Link></p>
        {cones}
        <button onClick={this.handleClick}>MORE ICE CREAM</button>

      </div>
    )
  }
}
