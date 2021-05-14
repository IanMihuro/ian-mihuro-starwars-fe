import React from "react";
import { IErrorMessage } from "../shared/types";

export const ErrorMessage = ({ message }: IErrorMessage) => {
  return <div>{message}</div>;
};
