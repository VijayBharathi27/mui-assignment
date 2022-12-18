import { colorContext } from "./component";
import { useContext } from "react";
export default function Para() {
  const { color, setColor } = useContext(colorContext);
  return (
    <>
      <button onClick={() => setColor("red")}>change color</button>
      <p style={{ color: `${color}` }}>This is a paragraph</p>
    </>
  );
}
