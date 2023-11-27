import express from 'express';
import * as postController from '../controllers/postController';
import { validate } from '../utils/validator';
import { PostSchema } from '../schemas/postSchema';
import { isLoggedIn } from '../middlewares/isLoggedin';
import { sameUser } from '../middlewares/sameUser';

const router = express.Router();

router
  .route('/')
  .post(isLoggedIn, validate(PostSchema), postController.postNewPost)
  .get(postController.getPosts);

router
  .route('/:id')
  .delete(isLoggedIn, sameUser, postController.deletePost)
  .put(isLoggedIn, sameUser, postController.putPost);

export default router;
