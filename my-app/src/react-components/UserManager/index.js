import React from 'react';
import Nav3 from "./../Nav3";
import UserList from "./../UserList";
import api from "./../../api"
import Input from "./../Input";
import Button from "@material-ui/core/Button";

import styles from "./styles.css"


class AdminPage extends React.Component {

	state = {
            isLoading: false,
            
		    signup: true,
		    

            username: "user",
            password: "user",

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
        	u.isChanging = false
        	api.updateUserById(u.id, u)

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
	                        <th>Modify</th>
	                        <th>UserName</th>
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



