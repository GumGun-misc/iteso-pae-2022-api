
function salaCreate(req, res){
    res.send("Create");
}

function salaGet(req, res){
    res.send("Get sala");
}

function salaGetOne(req, res){
    res.send("Get");
}

function salaUpdate(req, res){
    res.send("Update");
}

function salaDelete(){
    res.send("deleted")
}

let controller={
    salaCreate,
    salaGet,
    salaGetOne,
    salaUpdate,
    salaDelete
}
module.exports = controller

