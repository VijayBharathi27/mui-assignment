import TextField from "@mui/material/TextField";
import "./custom.css";
import React, { useState, createContext } from "react";
import Para from "./para";
export const colorContext = createContext();

export function Component() {
  const [color, setColor] = useState("");

  return (
    <div className="parent">
      <colorContext.Provider value={{ color, setColor }}>
        <div className="flex">
          <TextField label="Outlined" variant="outlined" />
          <Para />
        </div>
      </colorContext.Provider>
    </div>
  );
}
