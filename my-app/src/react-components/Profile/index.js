import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import Form from "semantic-ui-react"


// import Input from "./../Input";
import Nav2 from "./../Nav2";
import PokemonList from "./../PokemonList";

import "./styles.css";

class Profile extends React.Component {

	state = {
	    signin: false,
	    signup: false,
	    nav1: true,
	    nav2: false,

	    username: "user",
	    password: "user",
	    
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
	      currentUser: [{ 
	      				  name: "user", 
			              password: "user", 
			              id: "0",
			              title: "Newbee",
			              money: 100,
			              description: "I am a Pokemon Trainer!",
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
			                        },
			                        { pokename: "Pikachu", 
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
		            }]
	  };


	render() {


	    return (
	    	<div id="page">

		    	<div id="navbar">
		    		<Nav2 state={this.state} />
		    	</div>

		    	<div id="info">
		    		<p> <strong>Name: </strong>{this.state.currentUser[0].name} </p>
		    		<p> <strong>Title: </strong>{this.state.currentUser[0].title} </p>
		    		<p> <strong>GameId: </strong>{this.state.currentUser[0].id} </p>
		    	</div>

		    	<div id="description">
		    		<p> {this.state.currentUser[0].description} </p>
		    	</div>


 				<div id="poke-list">
 					<PokemonList pokemon={this.state.currentUser[0].pokemon} queueComponent={this}/>
 				</div> 


	    	</div>

    	);
  }
}

export default Profile;