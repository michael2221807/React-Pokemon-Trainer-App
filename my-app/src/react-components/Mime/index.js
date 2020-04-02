import React from "react";

import Nav2 from "../Nav2";
import api from "../../api"

import "./styles.css";

import background from "./background.jpg";
import mime from "../Store/mime.gif";

class Mime extends React.Component{

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
        const price = 40
        if (user.money < price) {
            window.alert('You don\'t have enough money!')
        }else {
            user.money -= price
            const mime = { pokename: "Mime", 
                          pokeid: 8, 
                          HP: 20, 
                          MaxHP: 40, 
                          Satiety: 0, 
                          MaxSatiety: 8, 
                          Experience: 0, 
                          MaxExperience: 100, 
                          level: 0, 
                          lonliness: 0
                        }

            mime.pokeid = this.idGenerator()
            user.pokemon.push(mime)

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
        } 

        
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

                            <img className="div-picture" src={mime}></img>
                        </div>


                    </div>

                    <div className="inline-documents">

                        <div id="nameTag-and-priceTag-wrapper">
                            <h5 className="nameTag">Mime</h5>
                            <h5 className="priceTag">$40</h5>

                            <div id='intro'>
                                <p>Mr. Mime is a bipedal, humanoid Pokémon. 
                                    Blue growths resembling clown hair 
                                    extend from the sides of its pale pink head, 
                                    and there is a magenta circle on each cheek. 
                                    Its jaw is curved inward, resembling the 
                                    mouth of a wooden dummy. </p>
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
export default Mime;