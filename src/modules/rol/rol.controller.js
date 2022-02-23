
function rolCreate(req, res){
    res.send("Create");
}

function rolGet(req, res){
    res.send("Get rol");
}

function rolGetOne(req, res){
    res.send("Get");
}

function rolUpdate(req, res){
    res.send("Update");
}

function rolDelete(){
    res.send("deleted")
}

let controller={
    rolCreate,
    rolGet,
    rolGetOne,
    rolUpdate,
    rolDelete
}
module.exports = controller

