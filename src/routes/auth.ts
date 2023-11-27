import express from 'express';
import * as authController from '../controllers/authController';
import { validate } from '../utils/validator';
import { loginSchema, signUpSchema } from '../schemas/authSchema';

const router = express.Router();

router.route('/signup').post(validate(signUpSchema), authController.register);

router.route('/login').post(validate(loginSchema), authController.login);

export default router;
