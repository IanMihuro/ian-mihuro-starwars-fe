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

export const SEARCH_PEOPLE = gql`
  query ($name: String!, $page: Int!) {
    person(name: $name, page: $page) {
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
