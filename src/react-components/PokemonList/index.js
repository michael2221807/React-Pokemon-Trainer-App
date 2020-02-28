import React from 'react';
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Pokemon from './../Pokemon'

class PokemonList extends React.Component {

	render() {
		const {pokemon, queueComponent} = this.props;

		return (
			<Table className="poke-list">
		        <TableBody>
		          {pokemon.map(pokemon => (
		            <Pokemon
		              key={uid(
		                pokemon
		              )} /* unique id required to help React render more efficiently when we modify the students list. */
		              pokemon={pokemon}
		              queueComponent={queueComponent}
		            />
		          ))}
		        </TableBody>
		     </Table>
			)
	}
}
export default PokemonList