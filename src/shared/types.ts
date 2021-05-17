import { ApolloError } from "@apollo/client/errors";

export interface IPerson {
  id?: string;
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface IPeople {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}

export interface IQueryProps {
  data: IPerson[];
  size: number;
  loading: boolean;
  error?: string;
}

export interface ITableProps {
  data: IPerson[];
  size: number;
  loading: boolean;
  error?: string;
  handlePageChange: (page: number) => void;
}

export interface ISearchResults {
  data: IPerson[];
  size: number;
  loading: boolean;
  error?: ApolloError | undefined;
  changePage: (page: number) => void;
  page: number;
}

export interface ISearchResultItem {
  person: IPerson;
}
export interface IErrorMessage {
  message: ApolloError | undefined;
}
