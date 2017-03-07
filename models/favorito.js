'use strict'
let mongoose = require("mongoose")
let Schema = mongoose.Schema


let FavoritoSchema = Schema({
    title: String,
    description: String,
    url: String
})

module.exports = mongoose.model('Favorito', FavoritoSchema)