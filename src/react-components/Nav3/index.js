import React from "react";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

import api from "./../../api"

import "./styles.css";

/* The Header Component */
class Nav3 extends React.Component {

  logoutHandler = () => {
    // console.log('fuck')
    const currentUser = this.props.state.currentUser[0]
    currentUser.isCurrent = false

    api.updateUserById(currentUser.id, currentUser).then((res) => {
      window.alert("Logout Success!")
    })
  }

  render() {
    const {
      state
    } = this.props;
    // console.log(username)

    let name = 'N/A'

    if (this.props.state.currentUser[0] != undefined) {
      name = this.props.state.currentUser[0].name
    }

    return (
      <nav className="nav">
      	<ul>
      		<li>
      			<div id="logo-wrapper3" >
		        	<img src={require("./poke.png")} />
		        </div>
      		</li>
	      	<li><a href="./../" onClick={this.logoutHandler}>Logout</a></li>
	      	<li><a>Admin: {name}</a></li>
          <li><a href="./../UserManager">View All Users</a></li>

          
	     	
	    </ul>
      </nav>
    );
  }
}

export default Nav3;