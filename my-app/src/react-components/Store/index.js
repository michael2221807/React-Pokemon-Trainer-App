import React from "react";

import Nav2 from "./../Nav2";

import api from "./../../api"

import "./styles.css";

import pikachu from "./pikachu.gif";
import psyduck from "./psyduck.gif";
import charmander from "./charmander.gif";
import gengar from "./gengar.gif"
import charizard from "./charizard.gif"
import squirtle from "./squirtle.gif"
import dragonite from "./dragonite.gif"
import mime from "./mime.gif"
import pidgeot from "./pidgeot.gif"
import alakazam from "./alakazam.gif"
import ivysaur from "./ivysaur.gif"
import ninetales from "./ninetales.gif"
import ball from "./ball.gif";


class Store extends React.Component{

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

    render() {
        
        return(
            <div>
                <Nav2 state={this.state}/>

            <div id="title-container">
                <h5 className="inline-title">Featured Pokemon</h5>
            </div>

            <div id="store-container">
                <a href="./../Pikachu">
                <div className="inline-picture">
                    <div >
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={pikachu}></img>
                    </div>

                    <h5 className="nameTags">Pikachu</h5>
                    <h5 className="priceTag">$20</h5>
                </div>
                </a>


                <a href="./../Psyduck">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={psyduck}></img>
                    </div>

                    <h5 className="nameTags">Psyduck</h5>
                    <h5 className="priceTag">$20</h5>
                </div>
                </a>

                <a href="./../Charmander">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={charmander}></img>
                    </div>

                    <h5 className="nameTags">Charmander</h5>
                    <h5 className="priceTag">$20</h5>
                </div>
                </a>

                <a href="./../Charizard">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={charizard}></img>
                    </div>

                    <h5 className="nameTags">Charizard</h5>
                    <h5 className="priceTag">$40</h5>
                </div>
                </a>

                <a href="./../Squirtle">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={squirtle}></img>
                    </div>

                    <h5 className="nameTags">Squirtle</h5>
                    <h5 className="priceTag">$20</h5>
                </div>
                </a>

                <a href="./../Gengar">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={gengar}></img>
                    </div>

                    <h5 className="nameTags">Gengar</h5>
                    <h5 className="priceTag">$20</h5>
                </div>
                </a>

                <a href="./../Dragonite">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={dragonite}></img>
                    </div>

                    <h5 className="nameTags">Dragonite</h5>
                    <h5 className="priceTag">$80</h5>
                </div>
                </a>

                <a href="./../Mime">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={mime}></img>
                    </div>

                    <h5 className="nameTags">Mime</h5>
                    <h5 className="priceTag">$40</h5>
                </div>
                </a>

                <a href="./../Pidgeot">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={pidgeot}></img>
                    </div>

                    <h5 className="nameTags">Pidgeot</h5>
                    <h5 className="priceTag">$40</h5>
                </div>
                </a>

                <a href="./../Alakazam">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={alakazam}></img>
                    </div>

                    <h5 className="nameTags">Alakazam</h5>
                    <h5 className="priceTag">$60</h5>
                </div>
                </a>

                <a href="./../Ivysaur">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={ivysaur}></img>
                    </div>

                    <h5 className="nameTags">Ivysaur</h5>
                    <h5 className="priceTag">$40</h5>
                </div>
                </a>

                <a href="./../Ninetales">
                <div className="inline-picture" >
                    <div>
                        <div className="shape"><span id="New">New</span></div>
                        <img className="div-pictureStore" src={ninetales}></img>
                    </div>

                    <h5 className="nameTags">Ninetales</h5>
                    <h5 className="priceTag">$40</h5>
                </div>
                </a>
            </div>




            <p id='Pokemon logo'></p>



            </div>
        );
    }

}
export default Store;