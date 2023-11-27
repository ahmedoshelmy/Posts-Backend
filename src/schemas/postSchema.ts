import { object, string } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          default: Post Title
 *        content:
 *          type: string
 *          default: Post Content
 *    CreatePostResonse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          default: Post created
 *    EditPostResonse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          default: Post edited
 *
 *    DeletePostResonse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          default: Post deleted
 */

// I assumed that the password Confirmation step is done in the front end
export const PostSchema = object({
  body: object({
    title: string().min(1).max(50),
    content: string().min(1),
  }),
});
