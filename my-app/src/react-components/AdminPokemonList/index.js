import React from 'react';
import { uid } from "react-uid";
import { Link } from "react-router-dom"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Pokemon from './../Pokemon'
import api from "./../../api"


class AdminPokemonList extends React.Component {



	onClickhandler = async (target, pokemon) => {
		// console.log(target)
		target.pokemon.map(poke => {
			poke.isTarget = false
		})
		pokemon.isTarget = true
		await api.updateUserById(target.id, target).then((res) => {
			// window.alert(`Change Success!`)
		})
		window.location.reload();
	};

	removehandler = async (target, pokemon) => {
		// console.log(target.pokemon)
		
		target.pokemon = target.pokemon.filter(function (poke) {
			return poke.pokeid !== pokemon.pokeid
		})
		// console.log(target.pokemon)
		await api.updateUserById(target.id, target).then((res) => {
			// window.alert(`Change Success!`)
		})
		window.location.reload();
		
	};

	render() {
		const {target, queueComponent} = this.props;
		// console.log(target)

		return (
			

		     <tbody>
		    	{target.pokemon.map(pokemon => (
	                <tr>
	                    
                        <Pokemon
			              key={uid(
			                pokemon
			              )}
			              pokemon={pokemon}
			              queueComponent={queueComponent}
			            />

	                    <td>
	                        <button className="ui yellow button">{pokemon.pokename}</button> 
	                    </td>

	                    <td>
	                        <button className="ui black button">{pokemon.pokeid}</button> 
	                    </td>

	                    <td>
	                        <button className="ui red button">{pokemon.level}</button> 
	                    </td>

	                    <td>
	                    	<Link to='./../ChangePanelPoke'>
	                        	<button className="ui blue button" onClick={() => this.onClickhandler(target, pokemon)}>Modify</button> 
	                    	</Link>
	                    </td>

	                    <td>
	                    	<button className="ui red button" onClick={() => this.removehandler(target, pokemon)}>Delete</button> 
	                    </td>

	                </tr>

		    		))}

            </tbody>
			)
	}
}
export default AdminPokemonList