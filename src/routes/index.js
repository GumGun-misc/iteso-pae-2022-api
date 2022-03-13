const router = require('express').Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channels/channel.routes');
const messageRoutes = require('./../modules/messages/message.routes');

router.use('/', jsonParser);
router.use('/', urlencodedParser);
router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
