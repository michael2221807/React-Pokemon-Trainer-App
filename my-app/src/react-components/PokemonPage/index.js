import React from 'react';
import Nav2 from "./../Nav2";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Psyduck1 from "./psyduck-1.gif";
import Psyduck2 from "./psyduck-2.gif";
import Psyduck3 from "./psyduck-3.gif"
import Pikachu1 from "./pikachu-1.gif";
import Pikachu2 from "./pikachu-2.gif";
import Pikachu3 from "./pikachu-3.gif";
import Alakazam1 from "./alakazam-1.gif";
import Alakazam2 from "./alakazam-2.gif";
import Alakazam3 from "./alakazam-3.gif";
import Charizard1 from "./charizard-1.gif";
import Charizard2 from "./charizard-2.gif";
import Charizard3 from "./charizard-3.gif";
import Dragonite1 from "./dragonite-1.gif";
import Dragonite2 from "./dragonite-2.gif";
import Dragonite3 from "./dragonite-3.gif";
import Gengar1 from "./gengar-1.gif";
import Gengar2 from "./gengar-2.gif";
import Gengar3 from "./gengar-3.gif";
import Ivysaur1 from "./ivysaur-1.gif";
import Ivysaur2 from "./ivysaur-2.gif";
import Ivysaur3 from "./ivysaur-3.gif";
import Mime1 from "./mime-1.gif";
import Mime2 from "./mime-2.gif";
import Mime3 from "./mime-3.gif";
import Ninetales1 from "./ninetales-1.gif";
import Ninetales2 from "./ninetales-2.gif";
import Ninetales3 from "./ninetales-3.gif";
import Pidgeot1 from "./pidgeot-1.gif";
import Pidgeot2 from "./pidgeot-2.gif";
import Pidgeot3 from "./pidgeot-3.gif";
import Squirtle1 from "./squirtle-1.gif";
import Squirtle2 from "./squirtle-2.gif";
import Squirtle3 from "./squirtle-3.gif";
import Charmander1 from "./charmander-1.gif";
import Charmander2 from "./charmander-2.gif";
import Charmander3 from "./charmander-3.gif";
import Charmeleon1 from "./charmeleon-1.gif";
import Charmeleon2 from "./charmeleon-2.gif";
import Charmeleon3 from "./charmeleon-3.gif";
import Raichu1 from "./raichu-1.gif";
import Raichu2 from "./raichu-2.gif";
import Raichu3 from "./raichu-3.gif";


import api from "./../../api"

import "./styles.css"


class PokemonPage extends React.Component {

	state = {
	    signin: false,
	    signup: false,
	    nav1: true,
	    nav2: false,

	    username: "user",
	    password: "user",
	    
	    users: [],
	    currentUser: [],
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
	      	if (u.isCurrent) {
	      		// console.log(u)
	      		this.state.currentUser = []
	        	this.state.currentUser.push(u)
	          	this.setState({
		            currentUser: this.state.currentUser,
		            isLoading: false
	          	})

	          	const pokemons = this.state.currentUser[0].pokemon

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

	train = () => {
		const currentUser = this.state.currentUser
		const pokemon = this.state.pokemon
		const Satiety = pokemon[0].Satiety
		const MaxSatiety = pokemon[0].MaxSatiety
		const HP = pokemon[0].HP
		const MaxHP = pokemon[0].MaxHP
		const Experience = pokemon[0].Experience
		const MaxExperience = pokemon[0].MaxExperience
		const lonliness = pokemon[0].lonliness

		if (currentUser[0].money > 5) {
			if ((Experience + 50) < MaxExperience && (Satiety - 5) > 0) {
				pokemon[0].Experience += 50
				pokemon[0].Satiety -= 5
				pokemon[0].sprite = 2
				pokemon[0].lonliness += 20
				currentUser[0].money -= 5
				currentUser[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})
				this.setState({
					currentUser: currentUser,
					pokemon: pokemon
				})

				api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);

			} else if ((Experience + 50) >= MaxExperience && (Satiety - 5) > 0) {
				pokemon[0].level += 1
				pokemon[0].Experience = 0
				pokemon[0].MaxExperience *= 2
				pokemon[0].MaxHP *= 2
				pokemon[0].MaxSatiety *= 2
				pokemon[0].sprite = 2
				pokemon[0].lonliness += 20
				currentUser[0].money -= 5

				if (pokemon[0].level === 10) {
					if (pokemon[0].pokename === "Pikachu"){
						pokemon[0].pokename = "Raichu"
						window.alert("Pikachu has evolved into Raichu!")
					}
					if (pokemon[0].pokename === "Charmander") {
						pokemon[0].pokename = "Charmeleon"
						window.alert("Charmander has evolved into Charmeleon!")
					}
				}


				currentUser[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})
				this.setState({
					currentUser: currentUser,
					pokemon: pokemon
				})

				api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);
			}
		}else {
			window.alert("You don't have enough money!")
		}

	};

	play = () => {
		const pokemon = this.state.pokemon
		const currentUser = this.state.currentUser
		const Satiety = pokemon[0].Satiety
		const MaxSatiety = pokemon[0].MaxSatiety
		const HP = pokemon[0].HP
		const MaxHP = pokemon[0].MaxHP
		const lonliness = pokemon[0].lonliness

		if (lonliness >= 5 && (Satiety - 2) >= 0) {
			pokemon[0].lonliness -= 5
			pokemon[0].Satiety -= 2
			pokemon[0].sprite = 3
			currentUser[0].pokemon.map(poke => {
				if (poke.isTarget) {
					poke = pokemon[0]
				}
			})
			currentUser[0].money += 5 * (pokemon[0].level + 1)
			this.setState({
				currentUser: currentUser,
				pokemon: pokemon
			})

			api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);
		}

	};


	feed = () => {
		const currentUser = this.state.currentUser
		const pokemon = this.state.pokemon
		const Satiety = pokemon[0].Satiety
		const MaxSatiety = pokemon[0].MaxSatiety
		const HP = pokemon[0].HP
		const MaxHP = pokemon[0].MaxHP
		const lonliness = pokemon[0].lonliness
		const Experience = pokemon[0].Experience
		const MaxExperience = pokemon[0].MaxExperience

		if (currentUser[0].money > 1) {
			if (Satiety < MaxSatiety) {
				pokemon[0].Satiety += 1
				pokemon[0].sprite = 2
				currentUser[0].money -= 1
				currentUser[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})

				this.setState({
					currentUser: currentUser,
					pokemon: pokemon
				})

				api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);

			} else if (Satiety >= MaxSatiety && HP < MaxHP) {
				pokemon[0].HP += 1
				pokemon[0].sprite = 2
				currentUser[0].money -= 1
				currentUser[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})

				this.setState({
					currentUser: currentUser,
					pokemon: pokemon
				})

				api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);


			} else if (Satiety >= MaxSatiety && HP >= MaxHP && lonliness > 0) {
				pokemon[0].lonliness -= 1
				pokemon[0].sprite = 2
				currentUser[0].money -= 1
				currentUser[0].pokemon.map(poke => {
					if (poke.isTarget) {
						poke = pokemon[0]
					}
				})
				this.setState({
					currentUser: currentUser,
					pokemon: pokemon
				})

				api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);

			} else if (Satiety >= MaxSatiety && HP >= MaxHP && lonliness <= 0) {
				if (Experience < MaxExperience) {
					pokemon[0].Experience += 1
					pokemon[0].sprite = 2
					currentUser[0].money -= 1
					currentUser[0].pokemon.map(poke => {
						if (poke.isTarget) {
							poke = pokemon[0]
						}
					})
					this.setState({
						currentUser: currentUser,
						pokemon: pokemon
					})

					api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

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
					currentUser[0].money -= 1


					if (pokemon[0].level === 10) {
						if (pokemon[0].pokename === "Pikachu"){
							pokemon[0].pokename = "Raichu"
							window.alert("Pikachu has evolved into Raichu!")
						}
						if (pokemon[0].pokename === "Charmander") {
							pokemon[0].pokename = "Charmeleon"
							window.alert("Charmander has evolved into Charmeleon!")
						}
					}



					currentUser[0].pokemon.map(poke => {
						if (poke.isTarget) {
							poke = pokemon[0]
						}
					})
					this.setState({
						currentUser: currentUser,
						pokemons: pokemon
					})

					api.updateUserById(this.state.currentUser[0].id, this.state.currentUser[0])

					setTimeout(function(){
						this.spriteChange(1)
					}.bind(this), 2500);
				}
			}
		}else {
			window.alert("You don't have enough money!")
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
								return <img class="poke-img" src={Psyduck1} style={{
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
							if (sprite === 1) {
								return <img class="poke-img" src={Pikachu1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Pikachu2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Pikachu3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}
						if (pokename === "Alakazam"){
							if (sprite === 1) {
								return <img class="poke-img" src={Alakazam1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Alakazam2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Alakazam3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}
						if (pokename === "Charizard"){
							if (sprite === 1) {
								return <img class="poke-img" src={Charizard1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Charizard2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Charizard3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}
						if (pokename === "Dragonite"){
							if (sprite === 1) {
								return <img class="poke-img" src={Dragonite1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Dragonite2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Dragonite3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Gengar"){
							if (sprite === 1) {
								return <img class="poke-img" src={Gengar1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Gengar2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Gengar3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Ivysaur"){
							if (sprite === 1) {
								return <img class="poke-img" src={Ivysaur1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Ivysaur2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Ivysaur3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Mime"){
							if (sprite === 1) {
								return <img class="poke-img" src={Mime1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Mime2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Mime3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Ninetales"){
							if (sprite === 1) {
								return <img class="poke-img" src={Ninetales1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Ninetales2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Ninetales3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Pidgeot"){
							if (sprite === 1) {
								return <img class="poke-img" src={Pidgeot1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Pidgeot2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Pidgeot3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Squirtle"){
							if (sprite === 1) {
								return <img class="poke-img" src={Squirtle1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Squirtle2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Squirtle3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Charmander"){
							if (sprite === 1) {
								return <img class="poke-img" src={Charmander1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Charmander2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Charmander3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Charmeleon"){
							if (sprite === 1) {
								return <img class="poke-img" src={Charmeleon1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Charmeleon2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Charmeleon3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
						}

						if (pokename === "Raichu"){
							if (sprite === 1) {
								return <img class="poke-img" src={Raichu1} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							} else if (sprite === 2) {
								return <img clas="poke-img" src={Raichu2} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}else if (sprite === 3) {
								return <img class="poke-img" src={Raichu3} style={{
																					position: 'absolute',
																					width: '300px',
																					height: '300px',
																					top: '21%',
																					left: '1%'
																				}}/>
							}
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

				<div id="actions"> 
					<Button
						id="feed"
		                variant="contained"
		                color="primary"
		                onClick={this.feed}
		                className="Feed"
		              >
		                Feed
		              </Button>

		              <Button
		              	id="play"
		                variant="contained"
		                color="primary"
		                onClick={this.play}
		                className="Play"
		              >
		                Play
		              </Button>

		              <Button
		              	id="train"
		                variant="contained"
		                color="primary"
		                onClick={this.train}
		                className="Train"
		              >
		                Train
		              </Button>


				</div>

			</div>


			);

	}
}
export default PokemonPage;










