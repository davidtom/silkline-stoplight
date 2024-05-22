import React from "react";
import "./App.css";

import { Sequence } from "./types";
import { Stoplight } from "./components/Stoplight";

const DEFAULT_SEQUENCE: Sequence = [
  { colors: ["green"], duration: 5000 },
  { colors: ["yellow"], duration: 1000 },
  { colors: ["red"], duration: 2000 },
];

function App() {
  return (
    <div>
      <Stoplight sequence={DEFAULT_SEQUENCE} />
    </div>
  );
}

export default App;
