import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './components/VendingMachine';
import Chips from './components/Chips';
import Cookies from './components/Cookies';
import IceCream from './components/IceCream';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/chips' render={() => <Chips/>} />
        <Route exact path='/cookies' render={() => <Cookies/>} />
        <Route exact path='/icecream' render={() => <IceCream/>} />
        <Route exact path='/' render={() => <VendingMachine/>} />
        
        
      </BrowserRouter>
    </div>

        )
  }

export default App;
