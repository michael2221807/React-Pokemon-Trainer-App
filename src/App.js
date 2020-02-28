/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import Login from './react-components/Login';
import Home from './react-components/Home';
import Profile from './react-components/Profile';
import Menu from './react-components/Menu';
import PokemonPage from './react-components/PokemonPage';
import Store from './react-components/Store';

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    
  }


  render() {
    // console.log(this.state)
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/Home' render={() => 
                            (<Home state={this.state}/>)}/>
            <Route exact path='/Login' render={() => 
                            (<Login state={this.state}/>)}/>
            <Route exact path='/Profile' render={() =>
                            (<Profile state={this.state}/>)}/>
            <Route exact path='/Menu' render={() =>
                            (<Menu state={this.state}/>)}/>
            <Route exact path='/PokemonPage' render={() =>
                            (<PokemonPage state={this.state}/>)}/>
            <Route exact path='/Store' render={() =>
                            (<Store state={this.state}/>)}/>
                            

          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;