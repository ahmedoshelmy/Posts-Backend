import express from 'express';
import * as authController from '../controllers/authController';
import { validate } from '../utils/validator';
import { loginSchema, signUpSchema } from '../schemas/authSchema';

const router = express.Router();

/**
 * @openapi
 * /auth/signup:
 *  post:
 *     tags: [Authentication]
 *     summary: Sign Up using email,name and password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/SignUpRequest'
 *     responses:
 *      201:
 *        description: User created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SignUpResponse'
 */
router.route('/signup').post(validate(signUpSchema), authController.register);

/**
 * @openapi
 * /auth/login:
 *  post:
 *     tags: [Authentication]
 *     summary: Login using email and password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *      200:
 *        description: User logged in successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginResponse'
 */
router.route('/login').post(validate(loginSchema), authController.login);

export default router;
