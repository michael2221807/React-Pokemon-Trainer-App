import React from 'react';
import Nav2 from "./../Nav2";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Psyduck from "./psyduck.gif";
import Psyduck2 from "./psyduck-2.gif";
import Psyduck3 from "./psyduck-3.gif"
import Pikachu from "./pikachu.gif";

import "./styles.css"


class PokemonPage extends React.Component {

	state = {
	    signin: false,
	    signup: false,
	    nav1: true,
	    nav2: false,

	    username: "user",
	    password: "user",
	    
	    users: [{ name: "user", 
	              password: "user", 
	              id: "0",
	              title: "Nagger",
	              money: 100,
	              description: "",
	              pokemon: [{ pokename: "Psyduck", 
	                          pokeid: 1, 
	                          HP: 10, 
	                          MaxHP: 10, 
	                          Satiety: 10, 
	                          MaxSatiety: 10, 
	                          Experience: 0, 
	                          MaxExperience: 100, 
	                          level: 0, 
	                          lonliness: 0
	                        }] 
	            },
	            { name: "user2", 
	              password: "user2",
	              id: "1",
	              title: "IdealNagger",
	              money: 200,
	              description: "",
	              pokemon: [{ pokename: "Pikachu", 
	                          pokeid: 2, 
	                          HP: 15, 
	                          MaxHP: 15, 
	                          Satiety: 8, 
	                          MaxSatiety: 8, 
	                          Experience: 0, 
	                          MaxExperience: 100, 
	                          level: 0, 
	                          lonliness: 0
	                        }] 
	            }],
	      currentUser: [{ 
	      				  name: "user", 
			              password: "user",
			              id: "0",
			              title: "Nagger",
			              money: 100,
			              description: "I am a Pokemon Trainer!",
			              pokemon: [{ pokename: "Psyduck", 
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
			                        },
			                        { pokename: "Pikachu", 
			                          pokeid: 2, 
			                          HP: 15, 
			                          MaxHP: 15, 
			                          Satiety: 8, 
			                          MaxSatiety: 8, 
			                          Experience: 0, 
			                          MaxExperience: 100, 
			                          level: 0, 
			                          lonliness: 0
	                        }] 
		            }]
	  		};


	spriteChange = (num) =>{
		const currentUser = this.state.currentUser
		currentUser[0].pokemon[0].sprite = num
		this.setState({
			currentUser: currentUser
		})
	};

	train = () => {
		const Satiety = this.state.currentUser[0].pokemon[0].Satiety
		const MaxSatiety = this.state.currentUser[0].pokemon[0].MaxSatiety
		const HP = this.state.currentUser[0].pokemon[0].HP
		const MaxHP = this.state.currentUser[0].pokemon[0].MaxHP
		const Experience = this.state.currentUser[0].pokemon[0].Experience
		const MaxExperience = this.state.currentUser[0].pokemon[0].MaxExperience
		const lonliness = this.state.currentUser[0].pokemon[0].lonliness
		const currentUser = this.state.currentUser

		if (Experience < MaxExperience && (Satiety - 5) > 0) {
			currentUser[0].pokemon[0].Experience += 10
			currentUser[0].pokemon[0].Satiety -= 5
			currentUser[0].pokemon[0].sprite = 2
			this.setState({
				currentUser: currentUser
			})

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);

		} else if (Experience >= MaxExperience && (Satiety - 5) > 0) {
			currentUser[0].pokemon[0].level += 1
			currentUser[0].pokemon[0].Experience = 0
			currentUser[0].pokemon[0].MaxExperience *= 2
			currentUser[0].pokemon[0].MaxHP *= 2
			currentUser[0].pokemon[0].MaxSatiety *= 2
			currentUser[0].pokemon[0].sprite = 2
			this.setState({
				currentUser: currentUser
			})

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);
		}

	};

	play = () => {
		const Satiety = this.state.currentUser[0].pokemon[0].Satiety
		const MaxSatiety = this.state.currentUser[0].pokemon[0].MaxSatiety
		const HP = this.state.currentUser[0].pokemon[0].HP
		const MaxHP = this.state.currentUser[0].pokemon[0].MaxHP
		const lonliness = this.state.currentUser[0].pokemon[0].lonliness
		const currentUser = this.state.currentUser

		if (lonliness >= 0 && (Satiety - 2) >= 0) {
			currentUser[0].pokemon[0].lonliness -= 5
			currentUser[0].pokemon[0].Satiety -= 2
			currentUser[0].pokemon[0].sprite = 3
			this.setState({
				currentUser: currentUser
			})

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);
		}

	};


	feed = () => {
		const Satiety = this.state.currentUser[0].pokemon[0].Satiety
		const MaxSatiety = this.state.currentUser[0].pokemon[0].MaxSatiety
		const HP = this.state.currentUser[0].pokemon[0].HP
		const MaxHP = this.state.currentUser[0].pokemon[0].MaxHP
		const lonliness = this.state.currentUser[0].pokemon[0].lonliness
		const Experience = this.state.currentUser[0].pokemon[0].Experience
		const MaxExperience = this.state.currentUser[0].pokemon[0].MaxExperience

		const currentUser = this.state.currentUser

		if (Satiety < MaxSatiety) {
			currentUser[0].pokemon[0].Satiety += 1
			currentUser[0].pokemon[0].sprite = 2
			this.setState({
				currentUser: currentUser
			})

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);

		} else if (Satiety >= MaxSatiety && HP < MaxHP) {
			currentUser[0].pokemon[0].HP += 1
			currentUser[0].pokemon[0].sprite = 2

			this.setState({
				currentUser: currentUser
			})

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);


		} else if (Satiety >= MaxSatiety && HP >= MaxHP && lonliness > 0) {
			currentUser[0].pokemon[0].lonliness -= 1
			currentUser[0].pokemon[0].sprite = 2
			this.setState({
				currentUser: currentUser
			})

			setTimeout(function(){
				this.spriteChange(1)
			}.bind(this), 2500);

		} else if (Satiety >= MaxSatiety && HP >= MaxHP && lonliness <= 0) {
			if (Experience < MaxExperience) {
				currentUser[0].pokemon[0].Experience += 1
				currentUser[0].pokemon[0].sprite = 2
				this.setState({
					currentUser: currentUser
				})

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);

			} else if (Experience >= MaxExperience) {
				currentUser[0].pokemon[0].level += 1
				currentUser[0].pokemon[0].Experience = 0
				currentUser[0].pokemon[0].MaxExperience *= 2
				currentUser[0].pokemon[0].MaxHP *= 2
				currentUser[0].pokemon[0].MaxSatiety *= 2
				currentUser[0].pokemon[0].sprite = 2
				this.setState({
					currentUser: currentUser
				})

				setTimeout(function(){
					this.spriteChange(1)
				}.bind(this), 2500);
			}
		}
	};



	render() {

		const {pokemon} = this.props;
	  	const pokename = this.state.currentUser[0].pokemon[0].pokename
	  	const sprite = this.state.currentUser[0].pokemon[0].sprite
	  	const poke = this.state.currentUser[0].pokemon[0]
		return (

			<div id='main-page'>

				<Nav2 state={this.state}/>


				<div id='poke-name'>
					Name: {pokename}
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
					<ul id="poke-inio-list">
						<li class="info-detail">
							Level {poke.level}
						</li>

						<li class="info-detail">
							HP: {poke.HP}/{poke.MaxHP}
						</li>

						<li class="info-detail">
							Satiety: {poke.Satiety / poke.MaxSatiety * 100} %
						</li>

						<li class="info-detail">
							Experience: {poke.Experience}/{poke.MaxExperience}
						</li>

						<li class="info-detail">
							Lonliness: {poke.lonliness}
						</li>
					</ul>
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










