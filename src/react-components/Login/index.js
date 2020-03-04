/*  Full Queue component */
// Everything here was previously in the App component.
import React from "react";
import Button from "@material-ui/core/Button";


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

import "./styles.css";

class Login extends React.Component {
  ///  React 'state'.
  // Allows us to keep track of chagning data in this component.
  state = {
    signin: false,
    signup: false,
    nav1: true,
    nav2: false,
    nav3: false,

    username: "",
    password: "",
    
    users: [{ name: "user", 
              password: "user", 
              id: "0",
              title: "Newbee",
              money: 100,
              description: "",
              pokemon: [{ pokename: "Psyduck", 
                          pokeid: 1, 
                          HP: 10, 
                          MaxHP: 10, 
                          Satiety: 10, 
                          MaxSatiety: 10, 
                          Experience: 0, 
                          MaxExperience: 100, 
                          level: 0, 
                          lonliness: 0
                        }] 
            },
            { name: "user2", 
              password: "user2", 
              id: "1",
              title: "Newbee",
              money: 200,
              description: "",
              pokemon: [{ pokename: "Pikachu", 
                          pokeid: 2, 
                          HP: 15, 
                          MaxHP: 15, 
                          Satiety: 8, 
                          MaxSatiety: 8, 
                          Experience: 0, 
                          MaxExperience: 100, 
                          level: 0, 
                          lonliness: 0
                        }] 
            }],
      currentUser: []
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


  handleClick = event => {
      event.preventDefault();
      if (this.state.signin === false) {
        this.setState({
          signin: true
        })
      } else if (this.state.signin === true) {
        this.setState({
          signin: false
        })
      }
  };

  handleClick2 = event => {
      event.preventDefault();
      if (this.state.signup === false) {
        this.setState({
          signin: false,
          signup: true
        })
      } else if (this.state.signup === true) {
        this.setState({
          signup: false
        })
      }
  };

  verifyUser = () => {
    const username = this.state.username
    const password = this.state.password
    const userlist = this.state.users

    if (username === 'admin') {
      if (password === 'admin') {
        this.state.currentUser = [{name:'admin'}]
        this.setState({
          currentUser: this.state.currentUser,
          signin: false,
          nav1: false,
          nav3: true
        })

      }
    }

    userlist.map(u => {
      if (u.name === username) {
        if (u.password === password) {
          console.log("Log in successfully!")
          // console.log(u)
          this.state.currentUser = []
          this.state.currentUser.push(u)
          this.setState({
            currentUser: this.state.currentUser,
            signin: false,
            nav1: false,
            nav2: true
          })
          
          // console.log(user.state.currentUser)
        } else {
          console.log("Wrong password!")
        }
      }
    })
  };

  addUser = () => {
    const users = this.state.users
    const _user = {
      name: this.state.username,
      password: this.state.password,
      title: "Nagger",
      money: 100,
      pokemon: []
    };

    users.map(u => {
      if (_user.name !== u.name) {
        users.push(_user);
      } else {
        console.log("username: " + u.name + " has been taken!")
      }
    })

    this.setState({
      users: users,
      signin: true,
      signup: false
    })
    // console.log(users)
  };
  


  // Each section of the Queue now has its own componenet, cleaning up the
  // JSX a lot.
  render() {

    let style1 = this.state.signin ? {} : {display: 'none'}
    let nav1 = this.state.nav1 ? {} : {display: 'none'}
    let style2 = this.state.signup ? {} : {display: 'none'}
    let nav2 = this.state.nav2 ? {} : {display: 'none'}
    let style3 = this.state.signin ? {} : {display: 'none'}
    let nav3 = this.state.nav3 ? {} : {display: 'none'}


    return (
      <div id="App">

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

        <div id="to-login">
          <Button
            id="to-login-button"
            onClick={this.handleClick}
            variant="contained"
            color="primary"
          >
          Click here to Login
          </Button>
        </div>

        <div id="sign-in" style={style1}>
        
          <form className="form"> 
            <div id="username">
              <label htmlFor="username">Username</label>
              <Input
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                label="Username"
              />
            </div>
            <div id="password">
              
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                label="Password"
              />
            </div>

            <div id="button">
              
              <Button
                variant="contained"
                color="primary"
                onClick={this.verifyUser}
                className="user-signin-button"
              >
                Login
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={this.handleClick2}
                className="user-signup-button"
              >
                Sign up
              </Button>
            </div>

          </form>

      
        </div>


        <div id="sign-up" style={style2}>
        
          <form className="form"> 
            <div id="username">
              <label htmlFor="username">Username</label>
              <Input
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                label="Username"
              />
            </div>

            <div id="password">
              
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                label="Password"
              />
            </div>

            <div id="button">
              
              <Button
                variant="contained"
                color="primary"
                onClick={this.addUser}
                className="user-signin-button"
              >
                Sign up
              </Button>

            </div>
            </form>
          </div>
        </div>


    );
  }
}

export default Login;
