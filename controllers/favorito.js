'use strict'

let Favorito = require("../models/favorito")

function prueba(req, res){
    let nombre;
    if(req.params.nombre){
        nombre = req.params.nombre
    }else{
        nombre = "SIN NOMBRE"
    }
    res.status(200).send({texto:`hola mundo MEAN ${nombre}`})
}

function getFavorito(req, res){
    let favoritoId = req.params.id;
    Favorito.findById(favoritoId, (err, favorito) =>{
        if(err){
            res.status(500).send({message:"Error al devolver el favorito"})
        }
        if(!favorito){
            res.status(404).sen({message:"No hay favorito"})
        }

        res.status(200).send({favorito})
    })
}
function getFavoritos(req, res){
    Favorito.find({}).sort('-title').exec((err, favoritos)=>{
        if(err){
            res.status(500).send({message:"Error al devolver los favoritos"})
        }
        if(!favoritos){
            res.status(404).sen({message:"No hay favoritos"})
        }

        res.status(200).send({data:favoritos})
    })
}
function saveFavorito(req, res){
    let favorito = new Favorito()
    let params = req.body
    favorito.title = params.title
    favorito.description = params.description
    favorito.url = params.url

    favorito.save((err, favoritoStored)=>{
        if(err){
            res.status(500).send({message:"Error al guardar el marcador"})
        }
        res.status(200).send({favorito:favoritoStored})
    })
    
}
function updateFavorito(req, res){
    let favoritoId = req.params.id;
    let update = req.body;

    findByIdAndUpdate(favoritoId, update, (err, FavoritoUpdated)=>{
        if(err){
            res.status(500).send({message:"Error al actualizar el marcador"})
        }
        res.status(200).send({favorito: FavoritoUpdated})

    })
}
function deleteFavorito(req, res){
    let favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err, favorito) =>{
        if(err){
            res.status(500).send({message:"Error al devolver el favorito"})
        }
        if(!favorito){
            res.status(404).sen({message:"No hay favorito"})
        }else{
            favorito.remove(err => {
                if(err){
                    res.status(500).send({message:"Erro al borrar el favorito"})
                }else{
                    res.status(200).send({message:`El favorito con id ${favoritoId} ha sido eliminado`})
                }
            })

        }

    })
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
