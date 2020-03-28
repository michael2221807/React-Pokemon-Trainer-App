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
import Lugia from './react-components/Lugia';
import Hooh from './react-components/Hooh';
import Giratina from './react-components/Giratina';
import Megarayquaza from './react-components/Megarayquaza';
import Darkrai from './react-components/Darkrai';
import Rayquaza from './react-components/Rayquaza';
import UserManager from './react-components/UserManager';
import ChangePanel from './react-components/ChangePanel';
import TargetProfile from './react-components/TargetProfile';
import ChangePanelPoke from './react-components/ChangePanelPoke';
import ChangePanelUser from './react-components/ChangePanelUser';
import SearchProfile from './react-components/SearchProfile';
import SearchPokemonList from './react-components/SearchPokemonList';
import SearchPokemonPage from './react-components/SearchPokemonPage';

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
            <Route exact path='/Lugia' render={() =>
                            (<Lugia state={this.state}/>)}/>
            <Route exact path='/Hooh' render={() =>
                            (<Hooh state={this.state}/>)}/>
            <Route exact path='/Darkrai' render={() =>
                            (<Darkrai state={this.state}/>)}/>
            <Route exact path='/Rayquaza' render={() =>
                            (<Rayquaza state={this.state}/>)}/>
            <Route exact path='/Giratina' render={() =>
                            (<Giratina state={this.state}/>)}/>
            <Route exact path='/Megarayquaza' render={() =>
                            (<Megarayquaza state={this.state}/>)}/>
            <Route exact path='/ChangePanelUser' render={() =>
                            (<ChangePanelUser state={this.state}/>)}/>
            <Route exact path='/SearchProfile' render={() =>
                            (<SearchProfile state={this.state}/>)}/> 
            <Route exact path='/SearchPokemonList' render={() =>
                            (<SearchPokemonList state={this.state}/>)}/> 
            <Route exact path='/SearchPokemonPage' render={() =>
                            (<SearchPokemonPage state={this.state}/>)}/> 

          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;