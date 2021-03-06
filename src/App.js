import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductionTank from './Components/ProductionTank/ProductionContainer';
import Brew from './Components/Brew/Brew';
import './App.css';

class App extends Component {
  

  render() {

    return (
      <div className='App'>
        <Switch>
          <Route path ='/' exact render ={ (props) => <Home {...props}/> } />
          <Route path ='/Brew' render ={ (props) => <Brew {...props}/> } />
          <Route path ='/ProductionTank/:tank' render ={ (props) => <ProductionTank {...props}/> } />
        </Switch>
      </div>
    );
  }
}

export default App;
