import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../shared/queries";
import { IPeople } from "../shared/types";
import { Table } from "../components/table";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [people, setPeople] = useState<IPeople>();
  const { data, loading } = useQuery(GET_PEOPLE, {
    variables: {
      page: currentPage,
    },
  });

  const HandlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (data) {
      const newData = { ...people, ...data.people };
      setPeople(newData);
    }
    // eslint-disable-next-line
  }, [data, setPeople]);

  return (
    <div>
      {loading && people === undefined && (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      )}
      {people && (
        <Table
          size={people.count}
          data={people.results}
          loading={loading}
          handlePageChange={HandlePageChange}
        />
      )}
    </div>
  );
};
