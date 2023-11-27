import express from 'express';
import * as postController from '../controllers/postController';
import { validate } from '../utils/validator';
import { PostSchema } from '../schemas/postSchema';
import { isLoggedIn } from '../middlewares/isLoggedin';
import { sameUser } from '../middlewares/sameUser';

const router = express.Router();

/**
 * @openapi
 * /posts:
 *  post:
 *     tags: [Posts]
 *     summary: Create Post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/Post'
 *     responses:
 *      201:
 *        description: Post created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreatePostResonse'
 *  get:
 *     tags: [Posts]
 *     summary: Get all Posts
 *     responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post'
 *
 */
router
  .route('/')
  .post(isLoggedIn, validate(PostSchema), postController.postNewPost)
  .get(postController.getPosts);

/**
 * @openapi
 * /posts/{postId}:
 *  put:
 *     tags: [Posts]
 *     summary: Edit a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/Post'
 *     responses:
 *      201:
 *        description: Post Edited successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/EditPostReponse'
 *  delete:
 *     tags: [Posts]
 *     summary: Delete a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/Post'
 *     responses:
 *      201:
 *        description: Post deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DeletedPostReponse'
 */
router
  .route('/:id')
  .delete(isLoggedIn, sameUser, postController.deletePost)
  .put(isLoggedIn, sameUser, postController.putPost);

export default router;
