import { ITableProps, IPerson } from "../shared/types";
import { DataGrid, GridPageChangeParams } from "@material-ui/data-grid";
import styled from "styled-components";

const Container = styled.div`
  margin: 60px 0;
  width: 100%;
  height: 600px;
  min-height: 440px;
`;

export const Table = ({
  data,
  size,
  loading,
  handlePageChange,
}: ITableProps) => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    { field: "height", headerName: "Height", width: 200 },
    { field: "mass", headerName: "Mass", width: 200 },
    { field: "gender", headerName: "Gender", width: 200 },
    { field: "homeworld", headerName: "Home World", width: 250 },
  ];

  const generateRows = (data: IPerson[]): IPerson[] => {
    return data.map((person, index) => ({ id: index.toString(), ...person }));
  };

  const rows = generateRows(data);

  const onPageChange = (props: GridPageChangeParams) => {
    handlePageChange(props.page + 1);
  };

  return (
    <Container>
      {rows && (
        <DataGrid
          getRowId={(row) => row.id}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowCount={size}
          paginationMode="server"
          onPageChange={onPageChange}
          loading={loading}
        />
      )}
    </Container>
  );
};
