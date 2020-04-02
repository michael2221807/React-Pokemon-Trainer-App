import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Psyduck1 from "./../PokemonPage/psyduck-1.gif";

import Pikachu1 from "./../PokemonPage/pikachu-1.gif";

import Alakazam1 from "./../PokemonPage/alakazam-1.gif";

import Charizard1 from "./../PokemonPage/charizard-1.gif";

import Dragonite1 from "./../PokemonPage/dragonite-1.gif";

import Gengar1 from "./../PokemonPage/gengar-1.gif";

import Ivysaur1 from "./../PokemonPage/ivysaur-1.gif";

import Mime1 from "./../PokemonPage/mime-1.gif";

import Ninetales1 from "./../PokemonPage/ninetales-1.gif";

import Pidgeot1 from "./../PokemonPage/pidgeot-1.gif";

import Squirtle1 from "./../PokemonPage/squirtle-1.gif";

import Charmander1 from "./../PokemonPage/charmander-1.gif";



class Pokemon extends React.Component {

	constructor(props) {
		super(props);
		this.state = {id: 0}
	};

	render() {

		const {pokemon, queueComponent} = this.props;

		return (
			<td>
				{function(){
					if (pokemon.pokename === "Psyduck"){
						return <img src={Psyduck1}/>
					}
					if (pokemon.pokename === "Pikachu"){
						return <img src={Pikachu1}/>
					}
					if (pokemon.pokename === "Alakazam"){
						return <img src={Alakazam1}/>
					}
					if (pokemon.pokename === "Charizard"){
						return <img src={Charizard1}/>
					}
					if (pokemon.pokename === "Dragonite"){
						return <img src={Dragonite1}/>
					}
					if (pokemon.pokename === "Gengar"){
						return <img src={Gengar1}/>
					}
					if (pokemon.pokename === "Ivysaur"){
						return <img src={Ivysaur1}/>
					}
					if (pokemon.pokename === "Mime"){
						return <img src={Mime1}/>
					}
					if (pokemon.pokename === "Ninetales"){
						return <img src={Ninetales1}/>
					}
					if (pokemon.pokename === "Pidgeot"){
						return <img src={Pidgeot1}/>
					}
					if (pokemon.pokename === "Squirtle"){
						return <img src={Squirtle1}/>
					}
					if (pokemon.pokename === "Charmander"){
						return <img src={Charmander1}/>
					}
					

				}()
				}
			</td>

			);

	}
}
export default Pokemon