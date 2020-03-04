/*  Full Queue component */
// Everything here was previously in the App component.
import React from "react";

// Importing components
import Header from "./../Header";
import UserForm from "./../UserForm";

// Importing actions/required methods
import { addUser, verifyUser } from "../../actions/Login";
import { Link } from "react-router-dom";


import Nav2 from "./../Nav2";
import Profile from "./../Profile";

import "./styles.css";
import pika from "./Search_img.gif";
import video from "./Clip.mkv";

class Menu extends React.Component {
  render() {
  	this.state = {
      signin: false,
      signup: false,
      nav1: true,
      nav2: false,

      username: "user",
      password: "user",
      
      users: [{ name: "user", 
                password: "user", 
                id: "0",
                title: "Nagger",
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
                title: "IdealNagger",
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
        currentUser: [{ 
                  name: "user", 
                    password: "user", 
                    id: "0",
                    title: "Nagger",
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
                }]
    };

    return (
      <div id="App_Menu">


        <Nav2 
          state={this.state}
        />

        <div id="Function_displayer">
        	<div id= "Store">
        		<div id= "Store_text"><a href="./../Store">POKE STORE</a></div>
        	</div>
        	<div id= "Video_ads">
        		<div style={{display: 'none'}}>
        			<embed id='ads' src={video}/>
        		</div>
        	</div>
        	<div id= "Profile">
        		<div id= "Profile_text"><a href="./../Profile">GET TO YOUR COLLECTION</a></div>
        	</div>
        	<div id= "Search">
        		<div id = 'Search_img'><img id='Search_img_gif' src={pika} /></div>
        		<form id='TrainerSearch'>
			 		<input id='UserName' type="text" placeholder="user name"/>
			 		<input type="Submit" value="SEARCH"/>
			 	</form>
        	</div>
        </div>

      </div>
    );
  }
}

export default Menu;
