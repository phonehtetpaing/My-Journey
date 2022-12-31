import { gql } from 'apollo-server-express';

const blog = `
  _id: String,
  title: String,
  description: String,
  image: String,
  category: String,
  categorySubtype: String,
`;

export default gql`
  scalar JSON # GraphQL JSON
  type Query {
    getBlogs: [Res_getBlogs]
    getBlogById(input: In_getBlogById!): Res_getBlogById
    getBlogsByCategory(input: In_getBlogsByCategory!): [Res_getBlogsByCategory]!
  }
  type Mutation {
    createBlog(input: In_createBlog!): Res_createBlog!
    updateBlog(input: In_updateBlog!): Status!
    deleteBlog(blogId: String!): Status!
  }
  input In_createBlog  {
    ${blog}
  }
  input In_updateBlog {
    blogId: String!
    payload: String!
  }
  input In_getBlogById {
    blogId: String!
  }
  input In_getBlogsByCategory {
    category: String!
    categorySubtype: String
  }
  type Res_getBlogs {
    ${blog}
  }
  type Res_getBlogById {
    ${blog}
  }
  type Res_getBlogsByCategory {
    ${blog}
  }
  type Res_createBlog {
    blogId: String!
  }
  type Status {
    status: Boolean!
  }
`;
