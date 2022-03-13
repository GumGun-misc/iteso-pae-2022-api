const Message = require("./message.model");

const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const message = new Message();
        message.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        console.log(req.params, req.body);
        let message = new Message();
        let newMessage=req.body;
        newMessage.date= new Date();
        newMessage.id = req.params.id;
        console.log(newMessage);
        
        message.collection.insertOne(newMessage)
        .then((result)=>{
            res.status(200).json({err:"", content:"message posted"});
        })
        .catch((error)=>{
            res.status(500).json({err:"error", content:""});
        })
        
    },
    getChat: (req, res) => {
        res.send('get message');
    }
}

module.exports = MessagesController;