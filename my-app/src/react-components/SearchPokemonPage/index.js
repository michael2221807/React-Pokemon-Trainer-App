import React from 'react';
import Nav2 from "./../Nav2";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Psyduck from "./psyduck.gif";
import Psyduck2 from "./psyduck-2.gif";
import Psyduck3 from "./psyduck-3.gif"
import Pikachu from "./pikachu.gif";
import api from "./../../api"

import "./styles.css"


class SearchPokemonPage extends React.Component {

	state = {
	    signin: false,
	    signup: false,
	    nav1: true,
	    nav2: false,

	    username: "user",
	    password: "user",
	    
	    users: [],
	    currentUser: [],
	    target: [],
	    pokemon: [{
			    	pokename: "Pikachu", 
					pokeid: 1, 
					sprite: 1,
					HP: 1, 
					MaxHP: 10, 
					Satiety: 0, 
					MaxSatiety: 10, 
					Experience: 0, 
					MaxExperience: 100, 
					level: 0, 
					lonliness: 15
	    }]
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
	      	if (u.isChanging) {
	      		// console.log(u)
	      		this.state.target = []
	        	this.state.target.push(u)
	          	this.setState({
		            target: this.state.target
		            
	          	})

	          	const pokemons = this.state.target[0].pokemon

	          	pokemons.map(poke => {
	          		if (poke.isTarget) {
	          			this.state.pokemon = []
	          			this.state.pokemon.push(poke)
	          			this.setState({
	          				pokemon: this.state.pokemon
	          			})
	          		}
	          	})
		       
	      	}

	      	if (u.isCurrent) {
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


	spriteChange = (num) =>{
		this.state.pokemon[0].sprite = num
		this.state.currentUser[0].pokemon.map(poke => {
			if (poke.isTarget) {
				poke = this.state.pokemon[0]
			}
		})
		this.setState({
			currentUser: this.state.currentUser,
			pokemon: this.state.pokemon
		})

		api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])
	};

	feed = () => {
		const target = this.state.target
		const pokemon = this.state.pokemon
		const Satiety = pokemon[0].Satiety
		const MaxSatiety = pokemon[0].MaxSatiety
		const HP = pokemon[0].HP
		const MaxHP = pokemon[0].MaxHP
		const lonliness = pokemon[0].lonliness
		const Experience = pokemon[0].Experience
		const MaxExperience = pokemon[0].MaxExperience


		if (Satiety < MaxSatiety) {
			pokemon[0].Satiety += 1
			pokemon[0].sprite = 2
			target[0].pokemon.map(poke => {
				if (poke.isTarget) {
					poke = pokemon[0]
				}
			})

			this.setState({
				target: target,
				pokemon: pokemon
			})

			api.updateUserById(this.state.target[0].id, this.state.target[0])

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);

		} else if (Satiety >= MaxSatiety && HP < MaxHP) {
			pokemon[0].HP += 1
			pokemon[0].sprite = 2
			target[0].pokemon.map(poke => {
				if (poke.isTarget) {
					poke = pokemon[0]
				}
			})

			this.setState({
				target: target,
				pokemon: pokemon
			})

			api.updateUserById(this.state.target[0].id, this.state.target[0])

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);


		} else if (Satiety >= MaxSatiety && HP >= MaxHP && lonliness > 0) {
			pokemon[0].lonliness -= 1
			pokemon[0].sprite = 2
			target[0].pokemon.map(poke => {
				if (poke.isTarget) {
					poke = pokemon[0]
				}
			})
			this.setState({
				target: target,
				pokemon: pokemon
			})

			api.updateUserById(this.state.target[0].id, this.state.target[0])

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);

		} else if (Satiety >= MaxSatiety && HP >= MaxHP && lonliness <= 0) {
			if (Experience < MaxExperience) {
				pokemon[0].Experience += 1
				pokemon[0].sprite = 2
				target[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})
				this.setState({
					target: target,
					pokemon: pokemon
				})

				api.updateUserById(this.state.target[0].id, this.state.target[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);

			} else if (Experience >= MaxExperience) {
				pokemon[0].level += 1
				pokemon[0].Experience = 0
				pokemon[0].MaxExperience *= 2
				pokemon[0].MaxHP *= 2
				pokemon[0].MaxSatiety *= 2
				pokemon[0].sprite = 2
				target[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})
				this.setState({
					target: target,
					pokemons: pokemon
				})

				api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);
			}
		}
	};



	render() {

	  	const pokename = this.state.pokemon[0].pokename
	  	const sprite = this.state.pokemon[0].sprite
	  	const poke = this.state.pokemon[0]
		return (

			<div id='main-page'>

				<Nav2 state={this.state}/>


				<div id='poke-name'>
					<strong>{pokename}</strong>
				</div>

				<div id='poke-attributes'>
					<strong>Attributes</strong>
				</div>

				<div id="pokemon-window">

					{function(){
						if (pokename === "Psyduck"){
							if (sprite === 1) {
								return <img class="poke-img" src={Psyduck} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Psyduck2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Psyduck3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}
						if (pokename === "Pikachu"){
							return <img clasName="poke-img" src={Pikachu} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
						}
					}()}

				</div>

				<div id="poke-info">

					<div id="pokeinfo-list" class="ui huge relaxed middle aligned divided list">
		    			<div role="listitem" class="item">
						    <i aria-hidden="true" class="paw icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Level: {poke.level} </a>
						    </div>
						</div>

					    <div role="listitem" class="item">
						    <i aria-hidden="true" class="heart icon middle aligned"></i>
						    <div class="content">
						        <a class="header">HP: {poke.HP}/{poke.MaxHP}</a>
						    </div>
					    </div>

						<div role="listitem" class="item">
						    <i aria-hidden="true" class="utensils icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Satiety: {poke.Satiety / poke.MaxSatiety * 100} %</a>
						    </div>
						</div>

						<div role="listitem" class="item">
						    <i aria-hidden="true" class="hourglass half icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Experience: {poke.Experience}/{poke.MaxExperience}</a>
						    </div>
						</div>
						
						<div role="listitem" class="item">
						    <i aria-hidden="true" class="smile icon middle aligned"></i>
						    <div class="content">
						        <a class="header">Lonliness: {poke.lonliness}</a>
						    </div>
						</div>

		    		</div>


					
				</div>

				<div id="actions1"> 
					<Button
						id="feed"
		                variant="contained"
		                color="primary"
		                onClick={this.feed}
		                className="Feed"
		              >
		                Feed
		              </Button>


				</div>

			</div>


			);

	}
}
export default SearchPokemonPage;










