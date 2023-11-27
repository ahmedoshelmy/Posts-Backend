import { Response, NextFunction } from 'express';
import { getPostById } from '../repositories/postRepository';
import { AuthenticatedRequest } from 'Request';

export const sameUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const post = await getPostById(id);
  if (!post) {
    return res.status(404).json({
      message: 'Post not found',
    });
  }
  if (post.author.id !== req.user.id) {
    return res.status(401).json({
      message: 'Unauthorized for this action',
    });
  }
  return next();
};
