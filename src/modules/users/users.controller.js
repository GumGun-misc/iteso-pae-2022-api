const User = require("./user.model");
var ObjectID = require('mongodb').ObjectID;

const options = {projection:{_id:0, password:0, Email:0}}


const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.collection.find({},options)
        .toArray((error, results) => {
            console.log(results);
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.collection.findOne(ObjectID(req.params.id), options)
        .then(result => {
            if(result) {
                res.send(result);
            } else {
                return Promise.reject('no user was found');
            }
        })
        .catch((error)=>{
            console.log(error);
            res.sendStatus(404);
        })
    },
    create: (req, res) => {
        const user = new User();
        console.log(req.body);
        user.collection.insertOne(
            req.body
        ).then(()=>{
            res.send('no error');
        });
    },
    login: (req, res) => {
        console.log(req.params, req.params);
        res.send('test');
    },
    delete: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                user.collection.deleteOne(result)
            } else {
                return Promise.reject('no user was found');
            }
        }).then(() => {
            res.send('user with id '+req.params.id+' borrado');
        }).catch((error)=>{
            console.log(error);
            res.sendStatus(404);
        });
    }
}

module.exports = UsersController;

//622b900e2a8f5fcd71aeed56