const User = require("./user.model");
const ObjectID = require('mongodb').ObjectID;

const options = {projection:{_id:0, password:0, email:0}}


const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.collection.find({}, options)
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
        let newUser=req.body;
        newUser.salas=[];
        console.log(newUser);
        user.collection.insertOne(newUser)
        .then(()=>{
            res.send('no error');
        })
        .catch(()=>{
            res.json({error:1, content:""});
        });
    },
    login: (req, res) => {
        console.log(req.params);
        const user = new User();
        let retVal=0;
        user.collection.findOne({email: req.params.email})
        .then(result => {
            if(result) {
                if(result.password==req.params.password){
                    res.status(200).json({error:"", content:result._id});
                }else{
                    retVal=500;
                    return Promise.reject('incorrect Password');
                }
            } else {
                retVal=404;
                return Promise.reject('no user was found');
            }
        })
        .catch((error)=>{
            res.status(404).json({error:error,content:""});
        })
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