import { useEffect, useState } from "react";

import { Color, Sequence } from "../types";
import { Light } from "./Light";

interface StoplightProps {
  sequence: Sequence;
}

export const Stoplight = ({ sequence }: StoplightProps) => {
  const [index, setIndex] = useState(0);
  const [activeColors, setActiveColors] = useState<Color[]>([]);

  // Cycle through elements of the sequence
  useEffect(() => {
    // BEGIN AI
    // REASON: was getting nervous I used too much time on phase 1 and wanted to get this part done
    // I new I needed to use a timeout and modulo to cycle through the sequence array but didn't
    // want to get bogged down debugging a solution from scratch so used AI as shortcut
    const { duration } = sequence[index];

    const t = setTimeout(() => {
      setIndex((index + 1) % sequence.length);
    }, duration);

    return () => clearTimeout(t);
    // END AI
  }, [sequence, index]);

  // As sequence element changes, update active colors
  useEffect(() => {
    const { colors } = sequence[index];
    setActiveColors(colors);
  }, [sequence, index]);

  return (
    <div className="stoplight">
      <Light color={"red"} activeColors={activeColors} />
      <Light color={"yellow"} activeColors={activeColors} />
      <Light color={"green"} activeColors={activeColors} />
    </div>
  );
};
