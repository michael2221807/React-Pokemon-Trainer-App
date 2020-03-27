import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav2 from "./../Nav2";
import PokemonList from "./../PokemonList";
import UserList from "./../UserList";
import Nav3 from "./../Nav3";
import AdminPokemonList from "./../AdminPokemonList";

import "./styles.css";

import api from "./../../api"

class TargetProfile extends React.Component {

	state = {
		isLoading: false,
	    nav2: true,
	    nav3: false,

	    username: "",
	    password: "",
	    
	    users: [],

	    
	    currentUser: [{ 
	      				  name: "Placeholder", 
			              password: "Placeholder",
			              id: "0",
			              title: "Placeholder",
			              money: 100,
			              description: "Placeholder",
			              pokemon: [{ pokename: "Placeholder", 
			                          pokeid: 1, 
			                          sprite: 1,
			                          HP: 1, 
			                          MaxHP: 10, 
			                          Satiety: 0, 
			                          MaxSatiety: 10, 
			                          Experience: 0, 
			                          MaxExperience: 100, 
			                          level: 0, 
			                          lonliness: 15
			                        },
			                        { pokename: "Placeholder", 
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
		target: [{ 
	      				  name: "Placeholder", 
			              password: "Placeholder",
			              id: "0",
			              title: "Placeholder",
			              money: 100,
			              description: "Placeholder",
			              pokemon: [{ pokename: "Placeholder", 
			                          pokeid: 1, 
			                          sprite: 1,
			                          HP: 1, 
			                          MaxHP: 10, 
			                          Satiety: 0, 
			                          MaxSatiety: 10, 
			                          Experience: 0, 
			                          MaxExperience: 100, 
			                          level: 0, 
			                          lonliness: 15
			                        },
			                        { pokename: "Placeholder", 
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

	        	if (u.name === 'admin') {
	        		this.state.nav3 = true
	        		this.state.nav2 = false
	        	}
	            // console.log(u)
	            this.state.currentUser = []
	            this.state.currentUser.push(u)
	            this.setState({
	                currentUser: this.state.currentUser,
	                nav2: this.state.nav2,
	                nav3: this.state.nav3
	                
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
	    console.log(this.state.target)

  	};


	render() {

	    let style2 = this.state.signup ? {} : {display: 'none'}
	    let nav2 = this.state.nav2 ? {} : {display: 'none'}
	    let style3 = this.state.signin ? {} : {display: 'none'}
	    let nav3 = this.state.nav3 ? {} : {display: 'none'}


	    return (
	    	<div id="page">

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
						        <a class="description"> {this.state.target[0].name} </a>
						    </div>
						</div>

					    <div role="listitem" class="item">
						    <i aria-hidden="true" class="trophy icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Honored Title</a>
						        <a class="description"> {this.state.target[0].title}</a>
						    </div>
					    </div>

						<div role="listitem" class="item">
						    <i aria-hidden="true" class="tags icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Trainer Identification Number</a>
						        <a class="description"> {this.state.target[0].id} </a>
						    </div>
						</div>

						<div role="listitem" class="item">
						    <i aria-hidden="true" class="sticky note icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Few words about myself</a>
						        <a class="description"> {this.state.target[0].description} </a>
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
		                        <th>Modify</th>
		                        <th>Remove</th>
		                    </tr>
	                    </thead>

	                    <AdminPokemonList target={this.state.target[0]} queueComponent={this}/>

	                    <tfoot>
	                    <tr>
	                        <th colspan="6">
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

export default TargetProfile;