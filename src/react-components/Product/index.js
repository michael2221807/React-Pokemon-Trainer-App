import React from "react";

import Nav2 from "./../Nav2";
import api from "./../../api"

import "./styles.css";

import background from "./background.jpg";
import charmander from "../Store/charmander.gif";

class Product extends React.Component{

    state = {
            isLoading: false,

            username: "user",
            password: "user",

            users: [],
            currentUser: []
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
               
            }
            this.setState({ isLoading: false })
        })
        // console.log(this.state.currentUser)

    };

    buyPokemon = async () => {
        
        // we need to update the currentUser info...
        //create a new Pokemon item, and add it to user
        //reduce the money users have
        const user = this.state.currentUser[0]
        const price = 20
        if (user.money < price) {
            window.alert('You don\'t have enough money!')
        }else {
            user.money -= price
        } 

        const psyduck = { pokename: "Psyduck", 
                          pokeid: 1, 
                          HP: 1, 
                          MaxHP: 10, 
                          Satiety: 0, 
                          MaxSatiety: 10, 
                          Experience: 0, 
                          MaxExperience: 100, 
                          level: 0, 
                          lonliness: 15
                        }

        const pikachu = { pokename: "Pikachu", 
                          pokeid: 2, 
                          HP: 15, 
                          MaxHP: 15, 
                          Satiety: 8, 
                          MaxSatiety: 8, 
                          Experience: 0, 
                          MaxExperience: 100, 
                          level: 0, 
                          lonliness: 0
                        }
        const charmander = { pokename: "Charmander", 
                              pokeid: 3, 
                              HP: 25, 
                              MaxHP: 25, 
                              Satiety: 0, 
                              MaxSatiety: 8, 
                              Experience: 0, 
                              MaxExperience: 100, 
                              level: 0, 
                              lonliness: 0
                          }

        psyduck.pokeid = this.idGenerator()
        user.pokemon.push(psyduck)

        await api.updateUserById(user.id, user).then((res) => {
            window.alert(`Purchased Success!`)
            this.setState({
                currentUser: this.state.currentUser[0]
            })
        })

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
               
            }
            this.setState({ isLoading: false })
        })
        window.location.reload();

        
    };

    idGenerator = () => {

      const pokes = this.state.currentUser[0].pokemon
      let result = 1
      let ids = [] 
      pokes.map(p => {
        ids.push(p.pokeid)
      })

      if (ids.length === 0) {
        result += 1
      }

      for (let i = 0; i < ids.length; i++) {
        result += parseInt(ids[i])
      }

      return result

  };

    render() {
        
        return(

            <div>
                <Nav2 state={this.state} style= "margin:0%"/>
                <div className="productPageBody">
                    

                    <div className="inline-pictures" >
                        <div>

                            <img className="div-picture" src={charmander}></img>
                        </div>


                    </div>

                    <div className="inline-documents">

                        <div id="nameTag-and-priceTag-wrapper">
                            <h5 className="nameTag">Charmander</h5>
                            <h5 className="priceTag">$20</h5>

                            <div id='intro'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien
                                pellentesque habitant morbi. Purus gravida quis
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. </p>
                            </div>
                            
                        </div>
                        <hr id="hr"></hr>
                        <button id="shapeButton" onClick={this.buyPokemon}>
                            <span id = "buy">Buy</span>
                        </button>
                    </div>
                </div>

            </div>
        );
    }

}
export default Product;