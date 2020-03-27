const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema({
	pokename: { type: String },
	pokeid: { type: Number },
	HP: { type: Number },
	MaxHP: { type: Number },
	Satiety: { type: Number},
	MaxSatiety: { type: Number},
	Experience: { type: Number},
	MaxExperience: { type: Number },
	level: { type: Number },
	lonliness: { type: Number },
	isTarget: { type: Boolean, default: false},
	sprite: { type: Number, default: 1 },
})

const userSchema = new Schema({
	name: { type: String},
    password: { type: String},
    id: { type: Number },
    title: { type: String, default: "Newbee"},
    money: { type: Number, default: 100},
    description: { type: String, default: "This guy is lazy, there is nothing here..."},
    pokemon: { type: [Pokemon], default: []},
    isCurrent: { type: Boolean, default: false},
    isChanging: { type: Boolean, default: false}
})

const User = mongoose.model('User', userSchema)


module.exports = { User }