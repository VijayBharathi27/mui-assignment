import TextField from "@mui/material/TextField";
import "./custom.css";
import { useState, createContext, useContext } from "react";
export const colorContext = createContext();

export default function Component() {
  const [color, setColor] = useState("");

  return (
    <div className="parent">
      <colorContext.Provider value={color}>
        <div className="flex">
          <TextField label="Outlined" variant="outlined" />
          <button onClick={() => setColor("red")}>change color</button>
          <Para />
        </div>
      </colorContext.Provider>
    </div>
  );
}

function Para() {
  const color = useContext(colorContext);
  return (
    <>
      <p style={{ color: `${color}` }}>This is a paragraph</p>
    </>
  );
}
