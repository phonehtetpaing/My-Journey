import logger from '../utils/logger.js';
import Blog from '../models/blog.model.js';
import { flattenObject } from '../utils/common.util.js';

export const getBlogs = async () => {
  logger.debug('getBlogs');

  const result = await Blog.find().lean();
  if (!result) { logger.debug('No Blogs'); return []; }

  logger.debug(`getBlogs result: ${JSON.stringify(result)}`);
  return result;
};

export const getBlogById = async (_0, { input }) => {
  const { blogId } = input;
  logger.debug(`getBlogById with id: ${blogId}`);

  const result = await Blog.findOne({ _id: blogId }).lean();
  if (!result) { logger.debug('No Blogs'); return []; }

  logger.debug(`getBlogById result: ${JSON.stringify(result)}`);
  return result;
};

export const getBlogsByCategory = async (_0, { input }) => {
  const { category, categorySubtype } = input;
  logger.debug(`getBlogsByCategory with category: ${category} and categorySubtype ${categorySubtype}`);
  let result;

  if (categorySubtype !== undefined) {
    result = await Blog.find({ category, categorySubtype }).lean();
  } else {
    result = await Blog.find({ category }).lean();
  }
  if (!result) { logger.debug('No Blogs'); return []; }

  logger.debug(`getBlogsByCategory result: ${JSON.stringify(result)}`);
  return result;
};

export const createBlog = async (_0, { input }) => {
  logger.debug(`createBlog with input: ${JSON.stringify(input)}`);
  const {
    title, description, image, createdAt, category, categorySubtype,
  } = input;

  const blog = new Blog({
    title,
    description,
    image,
    category,
    categorySubtype,
    createdAt,
  });

  const result = await blog.save();

  logger.debug(`New blog entry created for blogId ${result._id} for title ${title}: ${JSON.stringify(result)}`);
  return ({ status: !!result._id, blogId: result._id });
};

export const updateBlog = async (_0, { input }) => {
  const { blogId, payload } = input;
  const parsedPayload = flattenObject(JSON.parse(payload));

  logger.debug(`updateBlog with blogId: ${blogId}, parsedPayload: ${JSON.stringify(parsedPayload)}`);
  const result = await Blog.updateOne({ _id: blogId }, { $set: { ...parsedPayload } });

  logger.debug(`updateBlog result: ${JSON.stringify(result)}`);
  return { status: result.acknowledged && result.modifiedCount };
};

export const deleteBlog = async (_0, { blogId }) => {
  logger.debug(`deleteBlog with userId: ${blogId}`);
  const result = await Blog.updateOne({ _id: blogId }, { _deleted: blogId });

  logger.debug(`deleteBlog result: ${JSON.stringify(result)}`);
  return { status: result.acknowledged && result.modifiedCount };
};
