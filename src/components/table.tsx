import React from "react";
import { ITableProps, IPerson } from "../shared/types";
import { DataGrid } from "@material-ui/data-grid";

export const Table = ({ data, size }: ITableProps) => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      height: 150,
    },
    { field: "height", headerName: "Height", width: 200 },
    { field: "mass", headerName: "Mass", width: 200 },
    { field: "gender", headerName: "Gender", width: 200 },
    { field: "homeworld", headerName: "Home World", width: 200 },
  ];

  const generateRows = (data: IPerson[]): IPerson[] => {
    return data.map((person, index) => ({ id: index.toString(), ...person }));
  };

  const rows = generateRows(data);

  console.log("columns", columns);
  console.log("rows", rows);
  console.log("size", size);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      {rows && (
        <DataGrid
          getRowId={(row) => row.id}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowCount={size}
        />
      )}
    </div>
  );
};
