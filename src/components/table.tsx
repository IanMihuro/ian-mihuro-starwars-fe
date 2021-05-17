import { useContext } from "react";
import { ITableProps, IPerson } from "../shared/types";
import {
  DataGrid,
  GridPageChangeParams,
  GridRowParams,
} from "@material-ui/data-grid";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CharacterContext } from "../CharacterContext";

const Container = styled.div`
  margin: 10px 10px;
  width: 85%;
  height: 600px;
`;

export const Table = ({
  data,
  size,
  loading,
  handlePageChange,
}: ITableProps) => {
  const { setInfo } = useContext(CharacterContext);
  let history = useHistory();

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

  const handleRowClick = (param: GridRowParams) => {
    setInfo(param.row);
    history.push("/details");
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
          onRowClick={handleRowClick}
        />
      )}
    </Container>
  );
};
