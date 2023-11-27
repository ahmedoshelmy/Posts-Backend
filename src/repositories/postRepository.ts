import prisma from '../prismaClient';

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const createPost = async (
  title: string,
  content: string,
  userId: string,
) => {
  return await prisma.post.create({ data: { title, content, userId } });
};

export const deletePostById = async (postId: string) => {
  return await prisma.post.delete({ where: { id: postId } });
};

export const editPostById = async (
  postId: string,
  title: string,
  content: string,
) => {
  return await prisma.post.update({
    where: { id: postId },
    data: {
      title,
      content,
    },
  });
};
export const getPostById = async (postId: string) => {
  return await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      author: true,
    },
  });
};
