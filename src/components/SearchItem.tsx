import { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { CharacterContext } from "../CharacterContext";
import { ISearchResultItem } from "../shared/types";

export const SearchItem = (person: ISearchResultItem) => {
  const { name } = person.person;
  const { setInfo } = useContext(CharacterContext);
  let history = useHistory();

  const handleClick = () => {
    setInfo(person.person);
    history.push("/details");
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
      </ListItem>
      <Divider />
    </>
  );
};
