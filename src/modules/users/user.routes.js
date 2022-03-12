const router = require('express').Router();
const controller = require('./users.controller');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', controller.getAll);
router.post('/signup', jsonParser, controller.create);
router.get('/getOne/:id', urlencodedParser, controller.getOne);
router.delete('/:id', controller.delete);

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
 *   /api/users/signUp:
 *     post:
 *       tags:
 *       - Users
 *       description: SignUp
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               name: id
 *               required: true
 *               description: The user's unique ID          
 *               schema:
 *                 type: object
 *                 required:
 *                   - userName
 *                 properties:
 *                   Email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   Name:
 *                     type: string
 *                   userName:
 *                     type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
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
 *   definitions:
 *     User:
 *       type: object
 *       required:
 *         - userName
 *       properties:
 *         userName:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
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
 *           name: id
 *           required: true
 *           description: The user's unique ID          
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *             properties:
 *               Email:
 *                 type: string
 *               password:
 *                 type: string
 *               userName:
 *                 type: string
 *               Name:
 *                 type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */