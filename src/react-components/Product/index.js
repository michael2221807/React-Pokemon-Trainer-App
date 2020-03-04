import React from "react";

import Nav2 from "./../Nav2";
import "./styles.css";

import background from "./background.jpg";
import charmander from "../Store/charmander.gif";

class Product extends React.Component{
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
                title: "Newbee",
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
                    title: "Newbee",
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
                title: "Newbee",
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
                        <button id="shapeButton">
                            <span id = "buy">Buy</span>
                        </button>
                    </div>
                </div>

            </div>
        );
    }

}
export default Product;