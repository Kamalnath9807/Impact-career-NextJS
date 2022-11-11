import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          description
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    blogPosts {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          description
          content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS };
