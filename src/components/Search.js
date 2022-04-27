import React, { useContext } from "react";
import { AlertContext } from "../context/Alert/AlertContext";

export const Search = () => {
  const { show } = useContext(AlertContext);
  const onSubmit = (event) => {
    if (event.key === "Enter") {
      show("secondary", "boo");
    }
  };
  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter profile name"
        onKeyPress={onSubmit}
      />
    </div>
  );
};
