import { useContext } from "react";
import { CharacterContext } from "../CharacterContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  margin: 15px 15px;
  padding: 10px 10px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 10px;
  max-width: 450px;
`;

const Row = styled.div`
  display: flex;
  align-content: space-between;
  margin: 5px 0;
  flex-wrap: wrap;
`;

export const Details = () => {
  const { info } = useContext(CharacterContext);
  let history = useHistory();
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </Button>

      <Row>
        <InnerContainer>
          <Row>
            <img src={"https://via.placeholder.com/150"} alt="character" />
          </Row>
        </InnerContainer>

        <InnerContainer>
          <Row>
            <strong>Name:</strong> &nbsp; {info.name}
          </Row>
          <Row>
            <strong>Height:</strong>&nbsp; {info.height}
          </Row>
          <Row>
            <strong>Mass:</strong>&nbsp; {info.mass}
          </Row>
          <Row>
            <strong>Gender: </strong>&nbsp;
            {info.gender}
          </Row>
          <Row>
            <strong>Home World:</strong>&nbsp; {info.homeworld}
          </Row>
        </InnerContainer>
      </Row>
    </Container>
  );
};
