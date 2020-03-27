/*  Full Queue component */
// Everything here was previously in the App component.
import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'


// Importing components
import Header from "./../Header";
import UserForm from "./../UserForm";

// Importing actions/required methods
// import { addUser, verifyUser } from "../../actions/Login";
import { Link } from "react-router-dom";


import Nav from "./../Nav";
import Nav2 from "./../Nav2";
import Nav3 from "./../Nav3";
import Profile from "./../Profile";
import Input from "./../Input";
import UserManager from "./../UserManager";

import api from "./../../api"

import "./styles.css";

class ChangePanelPoke extends React.Component {
  ///  React 'state'.
  // Allows us to keep track of chagning data in this component.
  state = {
    isLoading: false,
    nav1: false,
    nav2: false,
    nav3: true,
    
    pokename: "",
    id: "",
    level: "",
    maxhp: "",
    maxexperience: "",
    maxsatiety: "",
    lonliness: "",
    
    users: [],
    currentUser: [],

    target: [],

    targetPoke: []
  };


  componentDidMount = async () => {
        
    // console.log(this.state.currentUser)

    this.setState({ isLoading: true })

    await api.getAllUsers().then(users => {
        this.setState({
            users: users.data.data
        })
    })
    // console.log(this.state.users)

    const userlist = this.state.users
    userlist.map(u => {
        if (u.isCurrent) {
            // console.log(u)
            this.state.currentUser = []
            this.state.currentUser.push(u)
            this.setState({
                currentUser: this.state.currentUser
                
            })
           
        }
        if (u.isChanging) {
          const pokes = u.pokemon
          pokes.map(poke => {
            if (poke.isTarget) {
              
              this.state.targetPoke = []
              this.state.targetPoke.push(poke)
              
            }
          })
          this.state.target = []
          this.state.target.push(u)
          // console.log(this.state.targetPoke)
          this.setState({
            target: this.state.target,
            argetPoke: this.state.targetPoke
            
          })
        }
        this.setState({ isLoading: false })
    })
    // console.log(this.state.targetPoke)

  };

  // Generic handler for whenever we type in an input box.
  // We change the state for the particular property bound to the textbox from the event.
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // log(name)

    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the 'name' variable.
    });
  };


  idGenerator = () => {

    api.getAllUsers().then(u => {
      this.setState({
        users: u.data.data
      })
    })

    const users = this.state.users
    let result = 1
    let ids = [] 
    users.map(u => {
      ids.push(u.id)
    })

    if (ids.length === 0) {
      result += 1
    }

    for (let i = 0; i < ids.length; i++) {
      result += parseInt(ids[i])
    }

    return result

  };

  submitChange = async () => {
    
    const target = this.state.target[0]
    const pokes = target.pokemon
    const targetPoke = this.state.targetPoke[0]
    let isValid = false
    // console.log(this.state.target)

    if (this.state.pokename !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.pokename = this.state.pokename
        }
      })
      isValid = true
    }

    if (this.state.id !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.pokeid = this.state.id
        }
      })
      isValid = true
    }
    
    if (this.state.level !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.level = this.state.level
        }
      })
      isValid = true
    }

    if (this.state.maxhp !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.MaxHP = this.state.maxhp
        }
      })
      isValid = true
    }

    if (this.state.maxexperience !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.MaxExperience = this.state.maxexperience
        }
      })
      isValid = true
    }

    if (this.state.maxsatiety !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.MaxSatiety = this.state.maxsatiety
        }
      })
      isValid = true
    }

    if (this.state.lonliness !== '') {
      pokes.map(poke => {
        if (poke.isTarget) {
          poke.lonliness = this.state.lonliness
        }
      })
      isValid = true
    }
    
    targetPoke.isTarget = false

    if (isValid) {
      await api.updateUserById(target.id, target).then((res) => {
        window.alert(`Change Success!`)
      })
    }else {
      window.alert(`You haven't changed anything!`)
    }
    window.location.reload();
    
  }
  


  // Each section of the Queue now has its own componenet, cleaning up the
  // JSX a lot.
  render() {

    

    let style1 = this.state.signin ? {} : {display: 'none'}
    let nav1 = this.state.nav1 ? {} : {display: 'none'}
    let style2 = this.state.signup ? {} : {display: 'none'}
    let nav2 = this.state.nav2 ? {} : {display: 'none'}
    let style3 = this.state.signin ? {} : {display: 'none'}
    let nav3 = this.state.nav3 ? {} : {display: 'none'}
    let style4 = this.state.login ? {} : {display: 'none'}
    let login = this.state.login ? {} : {display: 'none'}

    // console.log(this.props.state)


    return (
      <div id="App2">

        <div id="nav-bar1" style={nav1}>
          <Nav 
            state={this.state}
          />
        </div>

        <div id="nav-bar2" style={nav2}>
          <Nav2
            state={this.state}
          />
        </div>

        <div id="nav-bar3" style={nav3}>
          <Nav3
            state={this.state}
          />
        </div>

        <div id='glass'>

          <Form id="form2">

            <Form.Field>
              <label>Pokename</label>
              <input placeholder='New Pokename:'
                     name='pokename'
                     value={this.state.pokename}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Id</label>
              <input placeholder='New id:'
                     name='id'
                     value={this.state.id}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Level</label>
              <input placeholder='New Level:'
                     name='level'
                     value={this.state.level}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>MaxHP</label>
              <input placeholder='New HP:'
                     name='maxhp'
                     value={this.state.maxhp}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>MaxExp</label>
              <input placeholder='New experience:'
                     name='maxexperience'
                     value={this.state.maxexperience}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>MaxSatiety</label>
              <input placeholder='New Satiety:'
                     name='maxsatiety'
                     value={this.state.maxsatiety}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Lonliness</label>
              <input placeholder='New Lonliness:'
                     name='lonliness'
                     value={this.state.lonliness}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Link to='./../TargetProfile'>
              <Button className="ui teal button" id='sbutton' type='submit' onClick={() => this.submitChange()} >Submit</Button>
            </Link>
          </Form>  
        </div>
      </div>


    );
  }
}

export default ChangePanelPoke;
