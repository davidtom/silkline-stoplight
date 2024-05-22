export type Color =
  | "red"
  | "yellow"
  | "green"
  | "leftTurn"
  | "off"
  | "orange"
  | "purple";

export type ActiveColor = {
  colors: Color[];
  duration: number;
};

export type Sequence = ActiveColor[];

export type LightProperties = {
  position: number;
  color: string;
};

export type Configuration = Partial<Record<Color, LightProperties>>;
