import React from "react";
import { IErrorMessage } from "../shared/types";

export const ErrorMessage = ({ message }: IErrorMessage) => {
  return <>{message && <h3>{message?.message}!</h3>}</>;
};
