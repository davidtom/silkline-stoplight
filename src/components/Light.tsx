import { Color } from "../types";

interface LightProps {
  color: Color;
  activeColors: Color[];
}

export const Light = ({ color, activeColors }: LightProps) => {
  const active = activeColors.includes(color);
  return (
    <div className={`circle ${color}`} style={{ opacity: active ? 1 : 0.3 }} />
  );
};
