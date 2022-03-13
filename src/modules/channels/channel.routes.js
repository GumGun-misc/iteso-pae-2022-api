const router = require('express').Router();
const controller = require('./channels.controller');


router.get('/', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.post('/create/:id', controller.create);
router.delete('/:id/:owner', controller.delete);

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
*/
/**
 * @swagger
 *   /api/channels/create/{id}:
 *     post:
 *       tags:
 *       - Channels
 *       description: SignUp
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The message's unique ID
 *         - in: body
 *           name: user
 *           required: true
 *           description: new group body         
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               image:
 *                 type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
/**
 * @swagger
 *   /api/channels/getOne/{id}:
 *     get:
 *       tags:
 *       - Channels
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
/**
 * @swagger
 *   /api/channels/{id}/{owner}:
 *     delete:
 *       tags:
 *       - Channels
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *         - in: path
 *           name: owner
 *           required: true
 *           description: group owner token
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */

module.exports = router;

