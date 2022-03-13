const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.getAll);
router.post('/signup', controller.create);
router.get('/getOne/:id', controller.getOne);
router.delete('/:id', controller.delete);
router.get('/login/:email/:password', controller.login);

module.exports = router;
/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
/**
 * @swagger
 *   /api/users/getOne/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
/**
 * @swagger
 *   /api/users/{id}:
 *     delete:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
/**
 * @swagger
 *   /api/users/login/{email}/{password}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: email
 *           required: true
 *           description: The user's email
 *         - in: path
 *           name: password
 *           required: true
 *           description: The user's password
 *       responses:
 *         200:
 *           description: An object with a single user's data
*/
/**
 * @swagger
 *   /api/users/signUp:
 *     post:
 *       tags:
 *       - Users
 *       description: SignUp
 *       parameters:
 *         - in: body
 *           name: user
 *           required: true
 *           description: new user body         
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               userName:
 *                 type: string
 *               name:
 *                 type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */