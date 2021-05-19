import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { GET_PEOPLE, SEARCH_PEOPLE } from "../shared/queries";
import { Homepage } from "../pages/homepage";
import { Search } from "../pages/search";
import { Details } from "../pages/details";
import { CharacterContext } from "../CharacterContext";

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: GET_PEOPLE,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        people: {
          count: 82,
          next: "http://swapi.dev/api/people/?page=2",
          previous: null,
          results: [
            {
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              gender: "male",
              homeworld: "http://swapi.dev/api/planets/1/",
            },
          ],
        },
      },
    },
  },

  {
    request: {
      query: SEARCH_PEOPLE,
      variables: {
        name: "",
        page: 1,
      },
    },
    result: {
      data: {
        person: {
          count: 82,
          next: "http://swapi.dev/api/people/?page=2",
          previous: null,
          results: [
            {
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              gender: "male",
              homeworld: "http://swapi.dev/api/planets/1/",
            },
          ],
        },
      },
    },
  },
];

it("renders the homepage table", async () => {
  const { findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Homepage />
    </MockedProvider>
  );
  const tableColumnTitle = await findByText("Name");
  expect(tableColumnTitle).toBeInTheDocument();
});

it("renders the search page & list", async () => {
  const { findByText, getByText, getByLabelText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Search />
    </MockedProvider>
  );
  const input = getByLabelText("Search");
  expect(input).toBeInTheDocument();

  expect(getByText("Loading...")).toBeInTheDocument();

  const characterName = await findByText("Luke Skywalker");
  expect(characterName).toBeInTheDocument();
});

it("renders the details page with context storage data", async () => {
  const character = {
    info: {
      name: "Luke Skywalker",
      gender: "male",
      height: "172",
      mass: "77",
      homeworld: "http://swapi.dev/api/planets/1/",
    },
  };

  const { getByText } = render(
    <CharacterContext.Provider value={character}>
      <Details />
    </CharacterContext.Provider>
  );

  expect(getByText("Name: Luke Skywalker")).toBeInTheDocument();
});
