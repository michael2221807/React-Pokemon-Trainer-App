import React from 'react';
import { uid } from "react-uid";
import { Link, Route } from "react-router-dom"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Pokemon from './../Pokemon'
import api from "./../../api"
import ChangePanel from "./../ChangePanel"
import { Input } from 'semantic-ui-react'

class UserList extends React.Component {

	state = {
		isLoading: false,
	    value: "",
	    
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

	
	onClickhandler = async (user) => {
		console.log(user)
		user.isChanging = true
		await api.updateUserById(user.id, user).then((res) => {
			// window.alert(`Change Success!`)
		})
		window.location.reload();
	};

	removehandler = (user) => {
		
		api.deleteUserById(user.id)
		window.location.reload();

	}

	

	render() {

		const {users, queueComponent} = this.props;
		return (

		    <tbody>
		    	{users.map(user => (
	                <tr>
	                    <td>
	                    	<Link to='./../ChangePanel'>
	                    		<button className="ui teal button" onClick={() => this.onClickhandler(user)}> Modify </button>
                            </Link>
                                
                            
	                        
	                    </td>

	                    <td>
	                    	<div className="ui two buttons">
                                <button className="ui black button">Name:</button>
                                <button className="ui yellow button">{user.name}</button>
                            </div>
	                        
	                    </td>

	                    <td>
	                    	<div className="ui two buttons">
                                <button className="ui black button">Title:</button>
                                <button className="ui yellow button">{user.title}</button>
                            </div>
	                        
	                    </td>
	                    <td>
	                    	<div className="ui two buttons">
                                <button className="ui black button">Balance:</button>
                                <button className="ui yellow button">{user.money}</button>
                            </div>
	                       
	                    </td>

	                    <td>
	                        <Link to='./../TargetProfile'>
	                        	<button className="ui blue button" onClick={() => this.onClickhandler(user)}>Profile</button>
	                        </Link>
	                    </td>

	                    <td>
                            <button className="ui red button" onClick={() => this.removehandler(user)}>Remove</button>
	                       
	                    </td>


	                </tr>

		    		))}

            </tbody>
			
			)
	}
}
export default UserList