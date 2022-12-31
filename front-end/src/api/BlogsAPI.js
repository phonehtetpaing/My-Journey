import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query ($input: In_getBlogsByCategory!) {
    getBlogsByCategory(input: $input) {
      _id
      title
      description
      image
      category
      categorySubtype
    }
  }
`;

export const GET_BLOG_BY_ID = gql`
  query ($input: In_getBlogById!) {
    getBlogById(input: $input) {
      title
      description
      image
      category
      categorySubtype
    }
  }
`;