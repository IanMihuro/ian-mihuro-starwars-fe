import { useContext } from "react";
import { CharacterContext } from "../CharacterContext";
import { useHistory } from "react-router-dom";

export const Details = () => {
  const { info } = useContext(CharacterContext);
  let history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      {info.name} - {info.height}
    </div>
  );
};
