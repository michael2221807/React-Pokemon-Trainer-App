import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Psyduck from "./psyduck.gif";
import Pikachu from "./pikachu.gif"


class Pokemon extends React.Component {

	constructor(props) {
		super(props);
		this.state = {id: 0}
	};

	render() {

		const {pokemon, queueComponent} = this.props;

		return (
			<TableRow className="student" key={pokemon.pokename}>
				<TableCell component="th" scope="row">
					{function(){
						if (pokemon.pokename === "Psyduck"){
							return <img src={Psyduck}/>
						}
						if (pokemon.pokename === "Pikachu"){
							return <img src={Pikachu}/>
						}
					}()
					}
				</TableCell>

		        <TableCell component="th" scope="row">
		          {pokemon.pokename}
		        </TableCell>

		        <TableCell component="th" scope="row">
		          Level {pokemon.level}
		        </TableCell>
		    
		        <TableCell component="th" scope="row">
		          ID: {pokemon.pokeid}
		        </TableCell>

		        <TableCell component="th" scope="row">
					<Link id="link-to-detail" to={"./../PokemonPage"}>
			          	<Button id="detail-button">Detail </Button>
			        </Link> 
		          	
		        </TableCell>

		     </TableRow>

			);

	}
}
export default Pokemon