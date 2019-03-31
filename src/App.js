import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './Components/Home/HomeContainer';
import BrewContainer from './Components/Brew/BrewContainer';
import './App.css';

class App extends Component {
  state = {
  }
  

  render() {

    return (
      <div className='App'>
        <Switch>
          <Route path ='/' exact render ={ (props) => <HomeContainer {...props}/> } />
          <Route path ='/Brew' render ={ (props) => 
            <BrewContainer {...props}/> } />
        </Switch>
      </div>
    );
  }
}

export default App;