/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import Login from './react-components/Login';
import Profile from './react-components/Profile';
import Menu from './react-components/Menu';
import PokemonPage from './react-components/PokemonPage';
import Store from './react-components/Store';
import Charmander from './react-components/Charmander';
import Gengar from './react-components/Gengar';
import Psyduck from './react-components/Psyduck';
import Pikachu from './react-components/Pikachu';
import Snorlax from './react-components/Snorlax';
import Squirtle from './react-components/Squirtle';
import UserManager from './react-components/UserManager';
import ChangePanel from './react-components/ChangePanel';
import TargetProfile from './react-components/TargetProfile';
import ChangePanelPoke from './react-components/ChangePanelPoke';

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
            <Route exact path='/' render={() => 
                            (<Login state={this.state}/>)}/>
            <Route exact path='/Profile' render={() =>
                            (<Profile state={this.state}/>)}/>
            <Route exact path='/Menu' render={() =>
                            (<Menu state={this.state}/>)}/>
            <Route exact path='/PokemonPage' render={() =>
                            (<PokemonPage state={this.state}/>)}/>
            <Route exact path='/Store' render={() =>
                            (<Store state={this.state}/>)}/>
            <Route exact path='/Charmander' render={() =>
                            (<Charmander state={this.state}/>)}/>
            <Route exact path='/UserManager' render={() =>
                            (<UserManager state={this.state}/>)}/>
            <Route exact path='/ChangePanel' render={() =>
                            (<ChangePanel state={this.state}/>)}/>
            <Route exact path='/TargetProfile' render={() =>
                            (<TargetProfile state={this.state}/>)}/>
            <Route exact path='/ChangePanelPoke' render={() =>
                            (<ChangePanelPoke state={this.state}/>)}/>
            <Route exact path='/Gengar' render={() =>
                            (<Gengar state={this.state}/>)}/>
            <Route exact path='/Psyduck' render={() =>
                            (<Psyduck state={this.state}/>)}/>
            <Route exact path='/Pikachu' render={() =>
                            (<Pikachu state={this.state}/>)}/>
            <Route exact path='/Snorlax' render={() =>
                            (<Snorlax state={this.state}/>)}/>
            <Route exact path='/Squirtle' render={() =>
                            (<Squirtle state={this.state}/>)}/>

          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;