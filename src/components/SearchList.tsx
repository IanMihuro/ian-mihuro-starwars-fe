import React from "react";
import { ApolloError } from "@apollo/client/errors";
import Pagination from "@material-ui/lab/Pagination";
import { ISearchResults, IPerson } from "../shared/types";
import { ErrorMessage } from "./errorMessage";
import { SearchItem } from "./SearchItem";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

export const SearchList = ({
  data,
  loading,
  error,
  size,
  changePage,
  page,
}: ISearchResults) => {
  const handleErrorMessage = (error: ApolloError) => {
    return <ErrorMessage message={error} />;
  };

  const handleSearchResults = (people: IPerson[]) => {
    return people.map((person: IPerson, index) => (
      <SearchItem key={index} person={person} />
    ));
  };

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    changePage(value);
  };

  const getPages = (): number => {
    if (size % 10 > 0) {
      return Math.floor(size / 10 + 1);
    }
    return size / 10;
  };

  return (
    <>
      {error && handleErrorMessage(error)}
      {loading && <>Loading...</>}
      {size && (
        <>
          <h4>{size} results</h4>
          <Divider />
        </>
      )}

      {data && (
        <List component="nav" aria-label="main mailbox folders">
          {handleSearchResults(data)}
        </List>
      )}
      {size && (
        <Pagination
          count={getPages()}
          page={page}
          onChange={handleChangePage}
        />
      )}
    </>
  );
};
