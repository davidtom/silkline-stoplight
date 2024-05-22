import { Color } from "../types";

interface LightProps {
  color: Color;
  activeColors: Color[];
  backgroundColor: string;
}

export const Light = ({ color, activeColors, backgroundColor }: LightProps) => {
  const active = activeColors.includes(color);
  return (
    <div
      className={color !== "leftTurn" ? "circle" : "arrow"}
      style={{ backgroundColor, opacity: active ? 1 : 0.3 }}
    />
  );
};
