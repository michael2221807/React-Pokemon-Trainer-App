import React from 'react';
import { uid } from "react-uid";
import { Link } from "react-router-dom"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Pokemon from './../Pokemon'
import api from "./../../api"


class SearchPokemonList extends React.Component {

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

	render() {
		const {target, queueComponent} = this.props;

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
	                    	<Link to='./../SearchPokemonPage'>
	                        	<button className="ui blue button" onClick={() => this.onClickhandler(target, pokemon)}>Detail</button> 
	                    	</Link>
	                    </td>
	                </tr>

		    		))}

            </tbody>
			)
	}
}
export default SearchPokemonList