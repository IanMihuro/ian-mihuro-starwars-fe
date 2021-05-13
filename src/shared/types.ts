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

export interface ITableProps {
  data: IPerson[];
  size: number;
  loading: boolean;
  handlePageChange: (page: number) => void;
}
