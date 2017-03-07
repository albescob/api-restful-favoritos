'use strict'

let app = require("./app")
let mongoose = require("mongoose")
let port = process.env.port || 3002

mongoose.Promise = require('bluebird')
mongoose.connect("mongodb://localhost:27017/cursofavoritos", (err, res) => {
    if(err){
        throw err
    }else{
        console.log("conexion a mongodb corriendo")
        app.listen(port, () => {
            console.log(`API RESTful esta corriendo en http://localhost:${port}`)
        })
    }
   
})



