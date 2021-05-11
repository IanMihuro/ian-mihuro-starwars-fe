import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../shared/queries";
import { IPeople } from "../shared/types";
import { Table } from "../components/table";

export const Homepage = () => {
  const { data } = useQuery(GET_PEOPLE);
  const [people, setPeople] = useState<IPeople>();

  useEffect(() => {
    if (data !== undefined) {
      setPeople(data.people);
    }
  }, [data, setPeople]);

  return (
    <div>{people && <Table size={people.count} data={people.results} />}</div>
  );
};
