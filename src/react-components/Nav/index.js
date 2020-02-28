import React from "react";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

import "./styles.css";

/* The Header Component */
class Nav extends React.Component {
  render() {
    const {
      state
    } = this.props;
    // console.log(username)

    let name = "N/A"
    let money = 0
    console.log(this.props)
    const currentUser = this.props.state.currentUser[0]
    console.log(currentUser)
    if (currentUser !== undefined) {
      name = currentUser.name
      money = currentUser.money
    }
    

    return (
      <nav className="nav">
      	<ul>
      		<li>
      			<div id="logo-wrapper" >
		        	<img src={require("./poke.png")} />
		        </div>
      		</li>
	      	<li><a href="./../Home">Home</a></li>
	      	<li><a>Trainer: {name}</a></li>
	      	<li><a>Balance: {money}</a></li>
          

	     	
	    </ul>
      </nav>
    );
  }
}

export default Nav;