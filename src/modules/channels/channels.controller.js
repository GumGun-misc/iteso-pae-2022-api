const Channel = require("./channel.model");
const User = require("../users/user.model");
const ObjectID = require('mongodb').ObjectID;
const makeid = require('../../helpers/random');

const options = { projection: { owner: 0, secKey: 0 } }


const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.collection.find({}, options)
            .toArray((error, results) => {
                console.log(results);
                res.send(results);
            });
    },
    getOne: (req, res) => {
        const channel = new Channel();
        let id;
        try {
            id = ObjectID(req.params.id);
        } catch (error) {
            res.status(200).json({ error: 1, content: "" });
            return;
        }
        channel.collection.findOne(id, options)
            .then(result => {
                if (result) {
                    res.send(result);
                } else {
                    res.sendStatus(404);
                }
            });
    },
    create: (req, res) => {
        const user = new User();
        let id;
        try {
            id = ObjectID(req.params.id)
        } catch (err) {
            res.status(404).json({ error: "incorrect owner Id", content: '' });
            return;
        }
        user.collection.findOne(id)
            .then((result) => {
                if (!result) {
                    return Promise.reject('no existe');
                }
            }, (error) => {
                console.log(error);
                res.status(404).json({ error: "id does not exists", content: '' });
            })
        const channel = new Channel();
        let newChannel = req.body;
        newChannel.salas = [];
        newChannel.secKey = makeid(32);
        newChannel.owner = req.params.id;
        newChannel.messages = [];
        channel.collection.insertOne(newChannel)
            .then((result) => {
                let newChat = result.insertedId.toString();
                res.json({ error: '', content: 'created succesfully' });
                user.collection.findOneAndUpdate({ _id: id }, { $push: { salas: newChat } })
            }, () => {
                res.json({ error: 1, content: '' });
            });
    },
    delete: (req, res) => {
        const channel = new Channel();
        let id;
        try {
            id = ObjectID(req.params.id);
        } catch (error) {
            res.status(400).json({ error: 1, content: '' });
            return;
        }
        channel.collection.findOne(id)
            .then(result => {
                if (result) {
                    if (result.owner == req.params.owner) {
                        channel.collection.deleteOne(result)
                        res.status(200).json({ error: '', content: 'deleted succesfully' });
                    } else {
                        res.status(500).json({ error: 'error', content: '' });
                    }
                } else {
                    res.status(404).json({ error: 'error', content: '' });
                }
            })
    },
    join: (req, res) => {
        const channel = new Channel();
        let id;
        try {
            id = ObjectID(req.params.id)
        } catch (error) {
            res.status(400).json({ error: 1, content: '' });
            return;
        }
        channel.collection.findOne({secKey:req.params.link})
        .then((result)=>{
            if(result.owner==req.params.owner){
                res.status(200).json({error:"", content:result});
            }else{
                res.status(500).json({error:"not the owner", content:""});
            }
        })

    },
    getLink: (req, res) => {
        const channel = new Channel();
        const user = new User();
        let id;
        try {
            id = ObjectID(req.params.id);
        } catch (error) {
            res.status(400).json({ error: 1, content: '' });
            return;
        }
        channel.collection.findOne({secKey:req.params.link})
        .then((result)=>{
            console.log(result);
            user.collection.findOneAndUpdate({ _id: id }, { $push: { salas: result._id } })
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=>{
                console.log(error);
            })
            res.status(200).json({err:"", content:"joined succesfully"});
        }, (err)=>{
            console.log(err);
        })
    }
}


module.exports = ChannelsController;