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
	                    	<div className="ui two buttons">
                                <button className="ui yellow button">{user.name}</button>
                                <button className="ui black button">Change</button>
                            </div>
	                        
	                    </td>

	                    <td>
	                    	<div className="ui two buttons">
                                <button className="ui yellow button">{user.id}</button>
                                <button className="ui black button">Change</button>
                            </div>
	                        
	                    </td>

	                    <td>
	                    	<div className="ui two buttons">
                                <button className="ui yellow button">{user.title}</button>
                                <button className="ui black button">Change</button>
                            </div>
	                        
	                    </td>
	                    <td>
	                    	<div className="ui two buttons">
                                <button className="ui yellow button">{user.money}</button>
                                <button className="ui black button">Change</button>
                            </div>
	                       
	                    </td>

	                    <td>
	                        <Link to='./../Profile'>
	                        	<button className="ui blue button">Profile</button>
	                        </Link>
	                    </td>

	                    <td>
                            <button className="ui red button">Remove</button>
	                       
	                    </td>


	                </tr>

		    		))}

            </tbody>
			)
	}
}
export default UserList