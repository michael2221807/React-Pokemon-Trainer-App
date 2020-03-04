import React from "react";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

import "./styles.css";

/* The Header Component */
class Nav3 extends React.Component {
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
	      	<li><a href="./../">Logout</a></li>
	      	<li><a>Admin: {name}</a></li>
          <li><a href="./../UserManager">View All Users</a></li>

          
	     	
	    </ul>
      </nav>
    );
  }
}

export default Nav3;