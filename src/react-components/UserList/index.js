import React from 'react';
import { uid } from "react-uid";
import { Link } from "react-router-dom"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Pokemon from './../Pokemon'

class UserList extends React.Component {

	render() {
		const {users, queueComponent} = this.props;

		return (
			

		    <tbody>
		    	{users.map(user => (
	                <tr>
	                    <td>
	                        <button className="ui red button">{user.name}</button>
	                    </td>
	                    <td>
	                        <button className="ui black button">{user.id}</button>
	                    </td>
	                    <td>
	                        <button className="ui black button">{user.title}</button>
	                    </td>
	                    <td>
	                        <button className="ui black button">{user.money}</button>
	                    </td>

	                    <td>
	                        <Link to='./../Profile'>
	                        	<button className="ui blue button">Profile</button>
	                        </Link>
	                    </td>
	                </tr>

		    		))}

            </tbody>
			)
	}
}
export default UserList