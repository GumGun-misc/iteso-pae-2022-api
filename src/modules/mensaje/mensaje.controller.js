
function mensajeCreate(req, res){
    res.send("Create");
}

function mensajeGet(req, res){
    res.send("Get mensaje");
}

function mensajeGetOne(req, res){
    res.send("Get");
}

function mensajeUpdate(req, res){
    res.send("Update");
}

function mensajeDelete(){
    res.send("deleted")
}

let controller={
    mensajeCreate,
    mensajeGet,
    mensajeGetOne,
    mensajeUpdate,
    mensajeDelete
}
module.exports = controller

