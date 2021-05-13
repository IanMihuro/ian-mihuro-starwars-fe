import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query ($page: Int!) {
    people(page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;
