import styled from "styled-components";
import { Card as MuiCard } from "@mui/material";

export const Card = styled(MuiCard)`
  &.MuiCard-root {
    height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
`;
