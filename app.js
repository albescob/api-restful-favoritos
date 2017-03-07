'use strict'
let express = require("express")
let bodyParser = require("body-parser")

let app = express()
let api = require("./routes/favorito")


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POT, PUT, DELETE')
    res.header('Allow', 'GET, POT, PUT, DELETE')
})

app.use("/api", api)

module.exports = app;


