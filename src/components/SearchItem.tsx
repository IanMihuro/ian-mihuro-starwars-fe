import React from "react";
import { ISearchResultItem } from "../shared/types";

export const SearchItem = (person: ISearchResultItem) => {
  const { name } = person.person;
  return <div>{name}</div>;
};
