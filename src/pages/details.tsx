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
            <img src={`https://via.placeholder.com/150`} alt="character" />
          </Row>
        </InnerContainer>

        <InnerContainer>
          <Row>Name: {info.name}</Row>
          <Row>Height: {info.height}</Row>
          <Row>Mass {info.mass}</Row>
          <Row>Gender: {info.gender}</Row>
          <Row>Home World: {info.homeworld}</Row>
        </InnerContainer>
      </Row>
    </Container>
  );
};
