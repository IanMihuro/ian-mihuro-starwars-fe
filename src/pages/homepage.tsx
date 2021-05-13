import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../shared/queries";
import { IPeople } from "../shared/types";
import { Table } from "../components/table";

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
    if (data !== undefined) {
      const newData = { ...people, ...data.people };
      setPeople(newData);
    }
  }, [data, setPeople]);

  return (
    <div>
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
