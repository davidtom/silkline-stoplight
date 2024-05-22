import React from "react";
import "./App.css";

import { Configuration, Sequence } from "./types";
import { Stoplight } from "./components/Stoplight";

/**********
 * DEFAULT
 **********/
// const CONFIGURATION: Configuration = {
//   red: { position: 1, color: "red" },
//   yellow: { position: 2, color: "yellow" },
//   green: { position: 3, color: "green" },
// };

// const SEQUENCE: Sequence = [
//   { colors: ["green"], duration: 5000 },
//   { colors: ["yellow"], duration: 1000 },
//   { colors: ["red"], duration: 2000 },
// ];

/**********
 * STANDARD
 **********/
// const CONFIGURATION: Configuration = {
//   red: { position: 1, color: "red" },
//   yellow: { position: 2, color: "yellow" },
//   green: { position: 3, color: "green" },
// };
// const SEQUENCE: Sequence = [
//   { colors: ["green"], duration: 3000 },
//   { colors: ["yellow"], duration: 1000 },
//   { colors: ["red"], duration: 2000 },
// ];

/**********
 * EMERGENCY
 **********/
// const CONFIGURATION: Configuration = {
//   red: { position: 1, color: "red" },
//   yellow: { position: 2, color: "yellow" },
//   green: { position: 3, color: "green" },
// };
// const SEQUENCE: Sequence = [
//   { colors: ["red"], duration: 1000 },
//   { colors: ["off"], duration: 1000 },
// ];

/**********
 * PROTECTED TURN
 **********/
const CONFIGURATION: Configuration = {
  red: { position: 1, color: "red" },
  yellow: { position: 2, color: "yellow" },
  green: { position: 3, color: "green" },
  leftTurn: { position: 4, color: "#20F7B2" },
};
const SEQUENCE: Sequence = [
  { colors: ["leftTurn"], duration: 1000 },
  { colors: ["green"], duration: 1000 },
  { colors: ["yellow"], duration: 1000 },
  { colors: ["red"], duration: 1000 },
];

/**********
 * PARTY TIME
 **********/
// const CONFIGURATION: Configuration = {
//   red: { position: 1, color: "red" },
//   purple: { position: 2, color: "purple" },
//   green: { position: 3, color: "green" },
//   orange: { position: 4, color: "orange" },
// };
// const SEQUENCE: Sequence = [
//   { colors: ["red", "orange"], duration: 500 },
//   { colors: ["purple", "green"], duration: 500 },
//   { colors: ["purple", "orange", "green"], duration: 500 },
//   { colors: ["purple", "orange", "green", "red"], duration: 500 },
// ];

function App() {
  return (
    <div>
      <Stoplight configuration={CONFIGURATION} sequence={SEQUENCE} />
    </div>
  );
}

export default App;
