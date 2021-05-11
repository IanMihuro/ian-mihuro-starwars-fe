import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  {
    people {
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
