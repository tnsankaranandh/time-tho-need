import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import { Typography as MuiTypography } from "../Cards/Cards.style";

export const IntialContainer = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${(props) => props.backgroundImage});
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Button = styled(MuiButton)`
  background-color: white;
  border: 2px solid white;
  padding: 10px 40px;
  text-transform: none;
  &:hover {
    background-color: white;
  }
`;

export const Typography = styled(MuiTypography)`
  font-family: "Sarabun";
  color: #0c404e;
`;
