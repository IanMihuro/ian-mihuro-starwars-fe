import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { SEARCH_PEOPLE } from "../shared/queries";
import { useQuery } from "@apollo/client";
import { SearchList } from "../components/SearchList";

const SearchInputContainer = styled.div`
  margin: 10px 10px;
`;

export const Search = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useQuery(SEARCH_PEOPLE, {
    variables: {
      name: query,
    },
  });

  const memoizedHandleSearch = useCallback(() => {
    console.log("data", data.person);
  }, [data]);

  const handleInputChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = input.target;
    setQuery(value);
  };

  useEffect(() => {
    let debounce: ReturnType<typeof setTimeout>;

    if (query !== "") {
      debounce = setTimeout(memoizedHandleSearch, 3000);
    }
    return () => clearTimeout(debounce);
  }, [query, memoizedHandleSearch]);
  return (
    <div>
      <SearchInputContainer>
        <TextField
          id="outlined-search"
          label="Search field"
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
        />
      }
    </div>
  );
};
