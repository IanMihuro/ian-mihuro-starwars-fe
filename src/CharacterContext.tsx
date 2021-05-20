import React, { useReducer, createContext } from "react";
import { IPerson } from "./shared/types";

let reducer = (info: IPerson, newInfo: IPerson) => {
  return { ...info, ...newInfo };
};

const initialState: any = {
  name: "",
  height: "",
  mass: "",
  gender: "",
  homeworld: "",
};

const CharacterContext = createContext(initialState);

const CharacterProvider: React.FC = ({ children }) => {
  const [info, setInfo] = useReducer(reducer, initialState);
  return (
    <CharacterContext.Provider value={{ info, setInfo }}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
