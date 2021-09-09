import express from 'express';
import User from '../Models/User.js';
import Location from '../Models/Location.js';
import * as UserController from '../Controllers/UserController.js'
var router = express.Router();

/* GET users listing. */
router.post('/register', UserController.user_signup);
router.get('/:id', UserController.user);
router.get('/registrationStatus/:email', UserController.isEmailRegistered);
router.get('/login', UserController.user_login);


export default router;