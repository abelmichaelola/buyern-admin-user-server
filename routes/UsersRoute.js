import express from 'express';
import User from '../Models/User.js';
import Location from '../Models/Location.js';
import * as UserController from '../Controllers/UserController.js'
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.users);

export default router;
