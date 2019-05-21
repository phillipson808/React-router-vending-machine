import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/vendingMachine.css';

export default class VendingMachine extends Component {
  render() {
    return (
    <body>
      <head>
      <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"></link>
      </head>
      <div className="container">
        <div className="header">
          <h1>Lil' Buck's</h1>
          <h3>Ice Cream Shop</h3>
      <div classname="navBar">
          <button className="button"><Link className="link" to="/chips">Chips</Link></button>
          <button className="button"><Link className="link" to="/cookies">Cookies</Link></button>
          <button className="button"><Link to="/icecream" className="link">Ice Cream</Link></button>
      </div>
      </div>

      </div>
    </body>
    )
  }
}
