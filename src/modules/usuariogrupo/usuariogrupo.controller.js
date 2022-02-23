
function usuariogrupoCreate(req, res){
    res.send("Create");
}

function usuariogrupoGet(req, res){
    res.send("Get usuariogrupo");
}

function usuariogrupoGetOne(req, res){
    res.send("Get");
}

function usuariogrupoUpdate(req, res){
    res.send("Update");
}

function usuariogrupoDelete(){
    res.send("deleted")
}

let controller={
    usuariogrupoCreate,
    usuariogrupoGet,
    usuariogrupoGetOne,
    usuariogrupoUpdate,
    usuariogrupoDelete
}
module.exports = controller

