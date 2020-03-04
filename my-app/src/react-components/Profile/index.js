import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav2 from "./../Nav2";
import PokemonList from "./../PokemonList";
import UserList from "./../UserList";

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

		    		<div id="icon">
		    			<i class="user circle outline huge red icon middle aligned"></i> <br></br>
		    			<a> Profile </a>
		    		</div>

		    		<div id="user-list" class="ui divided relaxed list">
		    			<div role="listitem" class="item">
						    <i aria-hidden="true" class="user icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Trainer Name:</a>
						        <a class="description"> {this.state.currentUser[0].name} </a>
						    </div>
						</div>

					    <div role="listitem" class="item">
						    <i aria-hidden="true" class="trophy icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Honored Title</a>
						        <a class="description"> {this.state.currentUser[0].title}</a>
						    </div>
					    </div>

						<div role="listitem" class="item">
						    <i aria-hidden="true" class="tags icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Trainer Identification Number</a>
						        <a class="description"> {this.state.currentUser[0].id} </a>
						    </div>
						</div>

						<div role="listitem" class="item">
						    <i aria-hidden="true" class="sticky note icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Few words about myself</a>
						        <a class="description"> {this.state.currentUser[0].description} </a>
						    </div>
						</div>
						

		    		</div>
		    	</div>

		    

		    	<div id="table-wrapper">
	 				<table class="ui celled padded table">
	                    <thead>
		                    <tr>
		                        <th>^0 ^</th>
		                        <th>Pokemon Name</th>
		                        <th>Pokemon ID</th>
		                        <th>Level</th>
		                        <th>Portal</th>
		                    </tr>
	                    </thead>

	                    <PokemonList pokemon={this.state.currentUser[0].pokemon} queueComponent={this}/>

	                    <tfoot>
	                    <tr>
	                        <th colspan="5">
	                            <div className="ui right floated pagination menu">
	                                <a className="icon item">
	                                    <i className="left chevron icon"></i>
	                                </a>
	                                <a className="item">1</a>
	                                <a className="item">2</a>
	                                <a className="item">3</a>
	                                <a className="item">4</a>
	                                <a className="icon item">
	                                    <i className="right chevron icon"></i>
	                                </a>
	                            </div>
	                        </th>
	                    </tr>
	                    </tfoot>
	                </table>
                </div>


	    	</div>

    	);
  }
}

export default Profile;