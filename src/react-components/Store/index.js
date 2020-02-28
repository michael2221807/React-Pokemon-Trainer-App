import React from "react";

import Nav2 from "./../Nav2";
import "./styles.css";

import pikachu from "./pikachu.gif";
import psyduck from "./psyduck.gif";
import charmander from "./charmander.gif";
import ball from "./ball.gif";


class Store extends React.Component{
    render() {
        this.state = {
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
                    HP: 10,
                    MaxHP: 10,
                    Satiety: 10,
                    MaxSatiety: 10,
                    Experience: 0,
                    MaxExperience: 100,
                    level: 0,
                    lonliness: 0
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
        return(
            <div>
                <Nav2 state={this.state}/>

            <img id="ball" src={ball}></img>
            <h5 className="inline-title">Featured Pokemon</h5>

            <a href="./../Profile">
            <div className="inline-picture">
                <div >
                    <div className="shape"><span id="New">New</span></div>
                    <img className="div-picture" src={pikachu}></img>
                </div>

                <h5 className="nameTag">Pikachu</h5>
                <h5 className="priceTag">$20</h5>
            </div>
            </a>

            <a href="./../Profile">
            <div className="inline-picture" >
                <div>
                    <div className="shape"><span id="New">New</span></div>
                    <img className="div-picture" src={psyduck}></img>
                </div>

                <h5 className="nameTag">Psyduck</h5>
                <h5 className="priceTag">$20</h5>
            </div>
            </a>

            <a href="./../Profile">
            <div className="inline-picture" >
                <div>
                    <div className="shape"><span id="New">New</span></div>
                    <img className="div-picture" src={charmander}></img>
                </div>

                <h5 className="nameTag">Charmander</h5>
                <h5 className="priceTag">$20</h5>
            </div>
            </a>




            <p id='Pokemon logo'></p>



            </div>
        );
    }

}
export default Store;