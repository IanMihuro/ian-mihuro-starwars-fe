import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { SEARCH_PEOPLE } from "../shared/queries";
import { useQuery } from "@apollo/client";
import { SearchList } from "../components/SearchList";

const SearchInputContainer = styled.div`
  margin: 10px 10px;
  width: 350px;
`;

const Container = styled.div`
  max-width: 550px;
  margin: 0 10px;
`;

export const Search = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(SEARCH_PEOPLE, {
    variables: {
      name: query,
      page: page,
    },
  });

  const handleInputChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = input.target;
    setTimeout(() => setQuery(value), 1500);
  };
  return (
    <Container>
      <SearchInputContainer>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          variant="outlined"
          onChange={handleInputChange}
        />
      </SearchInputContainer>
      {
        <SearchList
          data={data?.person?.results}
          loading={loading}
          size={data?.person?.count}
          error={error}
          changePage={setPage}
          page={page}
        />
      }
    </Container>
  );
};
