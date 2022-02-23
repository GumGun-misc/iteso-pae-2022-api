
function usuarioCreate(req, res){
    res.send("Create");
}

function usuarioGet(req, res){
    res.send("Get usuario");
}

function usuarioGetOne(req, res){
    res.send("Get");
}

function usuarioUpdate(req, res){
    res.send("Update");
}

function usuarioDelete(){
    res.send("deleted")
}

let controller={
    usuarioCreate,
    usuarioGet,
    usuarioGetOne,
    usuarioUpdate,
    usuarioDelete
}
module.exports = controller

