import React from "react";
import { ApolloError } from "@apollo/client/errors";
import { ISearchResults, IPerson } from "../shared/types";
import { ErrorMessage } from "./errorMessage";
import { SearchItem } from "./SearchItem";

export const SearchList = ({ data, loading, error, size }: ISearchResults) => {
  const handleErrorMessage = (error: ApolloError) => {
    return <ErrorMessage message={error} />;
  };

  const handleSearchResults = (people: IPerson[]) => {
    return people.map((person: IPerson, index) => (
      <div key={index}>
        <SearchItem person={person} />
      </div>
    ));
  };

  return (
    <>
      {error && handleErrorMessage(error)}
      {loading && <>Loading...</>}
      {size && <>{size} results</>}
      {data && handleSearchResults(data)}
    </>
  );
};
