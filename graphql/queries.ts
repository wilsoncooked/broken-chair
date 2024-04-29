import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      createdAt
      description
      id
      price
      publishedAt
      title
      updatedAt
      type
      photos {
        width
        url(transformation: {})
        handle
      }
    }
  }
`;
