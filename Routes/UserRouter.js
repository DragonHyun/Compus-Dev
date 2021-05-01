const express = require('express');
const router = express.Router();
const { UserController } = require('../Controllers');
const passport = require('passport');

/**
 * @swagger
 * definitions:
 *  Users:
 *      required:
 *          -name
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 */

/**
 * @swagger
 * tags:
 *     name: Users
 */

/**
 * @swagger
 * /user:
 *     get:
 *         summary: abc
 *         description: abcd
 *         tags: [Users]
 *         produces:
 *             - application/json
 *         responses:
 *             200:
 *                 description: Success
 */

router.post('/check/unique', UserController.checkUnique);
router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);

router.patch('/', passport.authenticate('jwt', { session: false }), UserController.modifyUser);

router.get('/', UserController.allUser);

module.exports = router;