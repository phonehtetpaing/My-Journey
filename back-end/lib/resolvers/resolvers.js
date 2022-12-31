import GraphQLJSON from 'graphql-type-json';
import {
  getBlogs, getBlogById, getBlogsByCategory, createBlog, updateBlog, deleteBlog,
} from './blog.resolver.js';

export default {
  JSON: GraphQLJSON,
  Query: {
    // Blog
    getBlogs,
    getBlogById,
    getBlogsByCategory,
  },
  Mutation: {
    createBlog,
    updateBlog,
    deleteBlog,
  },
};
