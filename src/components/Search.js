import React, { useContext, useState } from "react";
import { AlertContext } from "../context/Alert/AlertContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      console.log("Make request with", value);
    } else {
      show("Enter profile name!");
    }
  };
  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter profile name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
