
function grupoCreate(req, res){
    res.send("Create");
}

function grupoGet(req, res){
    res.send("Get grupo");
}

function grupoGetOne(req, res){
    res.send("Get");
}

function grupoUpdate(req, res){
    res.send("Update");
}

function grupoDelete(){
    res.send("deleted")
}

let controller={
    grupoCreate,
    grupoGet,
    grupoGetOne,
    grupoUpdate,
    grupoDelete
}
module.exports = controller

