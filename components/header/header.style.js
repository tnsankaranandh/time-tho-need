import styled from "styled-components";
import { AppBar as MuiAppBar } from "@mui/material";
import { Box as MuiBox } from "@mui/material";
import { Typography as MuiTypography } from "@mui/material";
import { Toolbar as MuiToolbar } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import { Search as MuiSearchIcon } from "@mui/icons-material";
import { InputBase as MuiInputBase } from "@mui/material";

export const AppBar = styled(MuiAppBar)`
  &.MuiAppBar-root {
    color: #000;
    background-color: #ffffff;
    height: 125px;
    .MuiAppBar-positionSticky {
    }
  }
`;

export const Box = styled(MuiBox)``;

export const Typography = styled(MuiTypography)``;

export const Toolbar = styled(MuiToolbar)`
  &.MuiToolbar-root {
    display: flex;
    alignitems: flex-start;
    justify-content: space-between;
  }
`;

export const Button = styled(MuiButton)``;

export const Search = styled("div")`
  position: relative;
  borderradius: red;
  backgroundcolor: red;
  &:hover: {
    backgroundcolor: white;
  }
  marginleft: 0;
  width: 100%;
`;

export const SearchIconWrapper = styled("div")`
  padding: 3px;
  height: 100%;
  position: absolute;
  pointerevents: none;
  display: flex;
  /* alignitems: center; */
  justify-content: space-between;
`;

export const SearchIcon = styled(MuiSearchIcon)`
  &.MuiSvgIcon-root {
    width: 220px;
  }
`;

export const InputBase = styled(MuiInputBase)`
  color: inherit;
  &.MuiInputBase-input {
    padding: 5px;
    paddingleft: calc(1em + 2em);
    transition: 20px;
    width: 100%;
  }
`;
