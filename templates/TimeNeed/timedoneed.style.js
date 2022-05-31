import { Typography as MuiTypography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  /* margin-top: 126px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #edece7;
`;

export const Typography = styled(MuiTypography)`
  font-family: "Sarabun";
  color: #0c404e;
`;
