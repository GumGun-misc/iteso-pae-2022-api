const router = require('express').Router();
const controller = require('./messages.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/chat/:chat', controller.getChat);
router.post('/chat/:id/:chat', controller.create);

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
*/
/**
 * @swagger
 *   /api/messages/chat/{id}/{chat}:
 *     post:
 *       tags:
 *       - Messages
 *       description: SignUp
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *         - in: path
 *           name: chat
 *           required: true
 *           description: The chat unique ID
 *         - in: body
 *           name: message
 *           required: true
 *           description: messages content   
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
*/
/**
 * @swagger
 *   /api/messages/{id}:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get one message by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The message's unique ID
 *       responses:
 *         200:
 *           description: An object with a single message's data
*/
 
 module.exports = router;
