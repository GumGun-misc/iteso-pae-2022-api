#!/bin/sh

cd src/modules
echo "
    Usuario
    Grupo
    Sala
    Mensaje
    Sesion
    Rol
    UsuarioGrupo
    "| 
    tr '[:upper:]' '[:lower:]'| 
    xargs -I GGG sh -c "mkdir GGG; 
    echo '
function GGGCreate(req, res){
    res.send(\"Create\");
}

function GGGGet(req, res){
    res.send(\"Get GGG\");
}

function GGGGetOne(req, res){
    res.send(\"Get\");
}

function GGGUpdate(req, res){
    res.send(\"Update\");
}

function GGGDelete(){
    res.send(\"deleted\")
}

let controller={
    GGGCreate,
    GGGGet,
    GGGGetOne,
    GGGUpdate,
    GGGDelete
}
module.exports = controller
'>GGG/GGG.controller.js;
    echo '
const express = require(\"express\");
const controller = require(\"./GGG.controller\");

const router = express.Router();

router.get(\"/\", controller.GGGGet);
router.get(\"/:id\", controller.GGGGetOne);
router.post(\"/\", controller.GGGCreate);
router.put(\"/:id\", controller.GGGUpdate);
router.delete(\"/:id\", controller.GGGDelete);

module.exports = router;
'>GGG/GGG.router.js
    "
    
echo '
const express = require("express");
//const controller = require()

const router = express.Router();
'>../routes/index.js

echo "
    Usuario
    Grupo
    Sala
    Mensaje
    Sesion
    Rol
    UsuarioGrupo
    "| 
    tr '[:upper:]' '[:lower:]'| 
    xargs -I GGG echo '
        const GGGRoutes = require("./../modules/GGG/GGG.router");
        router.use("/GGG", GGGRoutes);
    '>>../routes/index.js

echo 'module.exports=router'>>../routes/index.js
