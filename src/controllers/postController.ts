import { Response, NextFunction } from 'express';
import {
  createPost,
  deletePostById,
  editPostById,
  getAllPosts,
} from '../repositories/postRepository';
import { AuthenticatedRequest } from '../types/Request';

export const getPosts = async (
  _req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction,
) => {
  const posts = await getAllPosts();
  return res.status(200).json({
    posts,
  });
};
export const postNewPost = async (
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction,
) => {
  const { title, content } = req.body;
  const createdPost = await createPost(title, content, req.user.id);
  return res.status(201).json({
    message: 'Post created',
    createdPost,
  });
};

export const deletePost = async (
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction,
) => {
  const { id } = req.params;
  await deletePostById(id);
  return res.status(201).json({
    message: 'Post deleted',
  });
};

export const putPost = async (
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction,
) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const editedPost = await editPostById(id, title, content);
  return res.status(201).json({
    message: 'Post edited',
    editedPost,
  });
};
