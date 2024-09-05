import "./App.css";
import { useState } from "react";

export default function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <h1>{isOn ? "ison" : "isoff"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function useToggle(initalValue) {
  const [value, setValue] = useState(initalValue);
  const toggle = () => setValue((x) => !x);
  return [value, toggle];
}
