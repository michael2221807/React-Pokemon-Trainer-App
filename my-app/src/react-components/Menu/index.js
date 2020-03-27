/*  Full Queue component */
// Everything here was previously in the App component.
import React from "react";

// Importing components
import Header from "./../Header";
import UserForm from "./../UserForm";

// Importing actions/required methods
import { Button } from 'semantic-ui-react'
import { addUser, verifyUser } from "../../actions/Login";
import { Link } from "react-router-dom";


import Nav2 from "./../Nav2";
import Profile from "./../Profile";

import api from "./../../api"


import "./styles.css";
import pika from "./Search_img.gif";
import ball from "./Profile_img.gif";
import ads from "./ads_img.gif";

class Menu extends React.Component {

  state = {

    isLoading: false,
    username: "",
    
    users: [],
    currentUser: []
    
  };

  componentDidMount = async () => {
    
    // console.log(this.state.currentUser)

    this.setState({ isLoading: true })

    await api.getAllUsers().then(users => {
      this.setState({
        users: users.data.data
      })
    })

    const userlist = this.state.users
    userlist.map(u => {
      if (u.isCurrent) {
        // console.log(u)
        this.state.currentUser = []
        this.state.currentUser.push(u)
          this.setState({
            currentUser: this.state.currentUser,
            isLoading: false
          })
       
      }
        this.setState({ isLoading: false })
    })
    // console.log(this.state.currentUser)
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // log(name)
    // console.log(this.state.users) 

    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the 'name' variable.
    });
  };

  submitChange = async () => {
    let theUser = null

    if (this.state.username !== "") {
      
      this.state.users.map(user => {
        
        if (user.name === this.state.username) {
          
          user.isChanging = true
          theUser = user
          
        }
        else {
          user.isChanging = false
          api.updateUserById(user.id, user)
        }

      })
      await api.updateUserById(theUser.id, theUser)
      window.location.reload();
    }

  }



  render() {

    return (
      <div id="App_Menu">


        <Nav2 
          state={this.state}
        />
        <div id='title-wrapper'>
            <h5 id= "Inner_text">Explore the Pokemon World</h5>
        </div>

        <div id="Function_displayer">

        	<div id= "Store">
        		<div id= "Store_text">
                    <a href="./../Store">POKE STORE</a>
                </div>
        	</div>

        	<div id= "Video_ads">
                <div id = 'Ads_img'>
                    <img id='Ads_img_gif' src={ads} />
                </div>
        	</div>

        	<div id= "Profile">

                <div id = 'Profile_img'><img id='Profile_img_gif' src={ball} /></div>
        		<div id= "Profile_text">
                    <a href="./../Profile">GET TO YOUR COLLECTION</a>
                </div>
        	</div>

        	<div id= "Search">
        		<div id = 'Search_img'>
                    <img id='Search_img_gif' src={pika} />
                </div>

        		<form id='TrainerSearch'>
			 		    <input placeholder='Username:'
                     name='username'
                     value={this.state.username}
                     onChange={this.handleInputChange} />

              <Link to='./../SearchProfile'>
                <Button id='sbutton1' type='submit' onClick={() => this.submitChange()} >Submit</Button>
              </Link>
            </form>
                
        	</div>
        </div>

      </div>
    );
  }
}

export default Menu;
