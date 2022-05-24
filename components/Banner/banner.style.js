import { PowerInputSharp } from "@mui/icons-material";
import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
  CardActionArea as MuiCardActionArea,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
} from "@mui/material";
import styled from "styled-components";

export const CardMedia = styled(MuiCardMedia)``;
export const Typography = styled(MuiTypography)``;
export const Container = styled.div`
  margin-top: 126px;
`;
export const CardActionArea = styled(MuiCardActionArea)``;

export const List = styled(MuiList)`
  display: flex;
  flex-direction: row;
  height: 100px;
`;
export const ListItem = styled(MuiListItem)``;
export const ListItemButton = styled(MuiListItemButton)`
  &.MuiListItemButton-root {
    height: 100%;
    background-color: ${(props) => props.color};
    color: white;
  }
`;

export const FloatingText = styled(Typography)`
  position: absolute;
`;
