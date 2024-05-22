export type Color = "red" | "yellow" | "green";

export type ActiveColor = {
  colors: Color[];
  duration: number;
};

export type Sequence = ActiveColor[];
