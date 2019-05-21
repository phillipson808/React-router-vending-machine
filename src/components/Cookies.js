import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Cookies extends Component {
  render() {
    return (
      <div>
        <h1>Cookies</h1>
        <p>Go to <Link to="/">Vending Machine</Link></p>
      </div>
    )
  }
}
