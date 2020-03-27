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

class ChangePanel extends React.Component {
  ///  React 'state'.
  // Allows us to keep track of chagning data in this component.
  state = {
    isLoading: false,
    nav1: false,
    nav2: false,
    nav3: true,
    
    username: "",
    title: "",
    description: "",
    money: null,
    
    users: [],
    currentUser: [],

    target: []
  };


  componentDidMount = async () => {
        
    // console.log(this.state.currentUser)

    this.setState({ isLoading: true })

    await api.getAllUsers().then(users => {
        this.setState({
            users: users.data.data
        })
    })
    console.log(this.state.users)

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
          this.state.target = []
          this.state.target.push(u)
          this.setState({
            target: this.state.target
            
          })
        }
        this.setState({ isLoading: false })
    })
    // console.log(this.state.currentUser)

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
    let isValid = false
    console.log(this.state.target)

    if (this.state.username !== '') {
      target.name = this.state.username
      isValid = true
    }
    if (this.state.title !== '') {
      target.title = this.state.title
      isValid = true
    }
    if (this.state.description !== '') {
      target.description = this.state.description
      isValid = true
    }
    if (this.state.money !== null) {
      target.money = this.state.money
      isValid = true
    }
    target.isChanging = false

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

          <Form id="form">

            <Form.Field>
              <label>Username</label>
              <input placeholder='New Username:'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Title</label>
              <input placeholder='New Title:'
                     name='title'
                     value={this.state.title}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Description</label>
              <input placeholder='New Description:'
                     name='description'
                     value={this.state.description}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Form.Field>
              <label>Money</label>
              <input placeholder='New Amount:'
                     name='money'
                     value={this.state.money}
                     onChange={this.handleInputChange} />
            </Form.Field>

            <Link to='./../UserManager'>
              <Button className="ui blue button" id='sbutton' type='submit' onClick={() => this.submitChange()} >Submit</Button>
            </Link>
          </Form>  
        </div>
      </div>


    );
  }
}

export default ChangePanel;
