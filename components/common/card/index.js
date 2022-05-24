import { Card as MuiCard } from "./card.style";

export const Card = ({ width, height, children }) => {
  return (
    <MuiCard width={width} height={height}>
      {children}
    </MuiCard>
  );
};
