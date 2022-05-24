import styled from "styled-components";
import { Box as MuiBox } from "@mui/material";
import { Tab as MuiTab } from "@mui/material";
import { Tabs as MuiTabs } from "@mui/material";

export const Tab = styled(MuiTab)`
  &.MuiTab-root {
    width: 500px;
  }
`;
export const Tabs = styled(MuiTabs)`
  display: flex;
  justify-content: space-evenly;
`;
export const Box = styled(MuiBox)`
  margin-left: 40px;
  width: 100%;
`;
