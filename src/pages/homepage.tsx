import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE, CHANGE_PAGE } from "../shared/queries";
import { IPeople } from "../shared/types";
import { Table } from "../components/table";
import { getParameterByName } from "../shared/functions";

export const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [people, setPeople] = useState<IPeople>();
  const [nextPage, setNextPage] = useState<string | null>("");
  const [previousPage, setPreviousPage] = useState<string | null>("");
  const { data, loading, fetchMore } = useQuery(CHANGE_PAGE, {
    variables: {
      page: currentPage,
    },
  });

  const HandlePageChange = (page: number) => {
    setCurrentPage(page);
    // fetchMore({
    //   variables: {
    //     page: page,
    //   },
    // });
    // console.log("data", data.nextPage);
    // setPeople(data.nextPage);
  };

  useEffect(() => {
    if (data !== undefined) {
      const newData = { ...people, ...data.nextPage };
      setPeople(newData);
    }
    console.log("data", data);
  }, [data, setPeople]);

  useEffect(() => {
    if (data !== undefined) {
      if (data.nextPage.next !== null) {
        setNextPage(getParameterByName("page", data.nextPage.next));
      }
      if (data.nextPage.previous !== null) {
        setPreviousPage(getParameterByName("page", data.nextPage.previous));
      }
    }
  }, [data, setNextPage, setPreviousPage]);

  return (
    <div>
      {people && (
        <Table
          size={people.count}
          data={people.results}
          loading={loading}
          nextPage={nextPage}
          previousPage={previousPage}
          handlePageChange={HandlePageChange}
        />
      )}
    </div>
  );
};
