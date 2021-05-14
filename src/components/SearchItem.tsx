import React from "react";
import { ISearchResultItem } from "../shared/types";

export const SearchItem = (person: ISearchResultItem) => {
  const { name, gender, mass, height } = person.person;
  return (
    <div>
      {name} - {height} - {gender} - {mass}
    </div>
  );
};
