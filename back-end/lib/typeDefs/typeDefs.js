import { gql } from 'apollo-server-express';
import blog from './blog.typeDef.js';

const common = gql`
  type Query
`;

export default [
  common,
  blog,
];
