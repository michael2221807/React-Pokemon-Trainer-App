import React from 'react';
import Nav3 from "./../Nav3";
import UserList from "./../UserList";

import styles from "./styles.css"


class AdminPage extends React.Component {

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
	  		<div id="admin-page">

	  			<div id="navbar">
		    		<Nav3 state={this.state} />
		    	</div>

		    	<h5 className="inline-title">Admin System</h5>

		    	<div id="t-wrapper">
			    	<table class="ui celled padded table">
	                    <thead>
		                    <tr>
		                        <th>Username</th>
		                        <th>UserId</th>
		                        <th>Titles</th>
		                        <th>Credit</th>
		                        <th>Profile Portal</th>
		                        <th>Delete User</th>
		                    </tr>
	                    </thead>

	                    <UserList users={this.state.users} state={this.state}/>

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


export default AdminPage;



