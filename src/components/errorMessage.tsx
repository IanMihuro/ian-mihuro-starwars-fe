import React from "react";
import { IErrorMessage } from "../shared/types";

export const ErrorMessage = ({ message }: IErrorMessage) => {
  return <>{message && <h3>{message.message}!</h3>}</>;
};

export const FallBackComponent = ({ error }: any) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <p>Please refresh the page </p>
    </div>
  );
};
