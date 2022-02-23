
function sesionCreate(req, res){
    res.send("Create");
}

function sesionGet(req, res){
    res.send("Get sesion");
}

function sesionGetOne(req, res){
    res.send("Get");
}

function sesionUpdate(req, res){
    res.send("Update");
}

function sesionDelete(){
    res.send("deleted")
}

let controller={
    sesionCreate,
    sesionGet,
    sesionGetOne,
    sesionUpdate,
    sesionDelete
}
module.exports = controller

