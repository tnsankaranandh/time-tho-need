import {
  CardMedia,
  Typography,
  Container,
  CardActionArea,
  List,
  ListItem,
  ListItemButton,
  FloatingText,
} from "./banner.style";
import { Card } from "../common/card";

export const Banner = () => {
  return (
    <Container>
      <Card width={"100%"} height={"810px"}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="710"
          image={
            "https://images.contentstack.io/v3/assets/blt768ba725e641b87f/blt990bfd9dbc82cbb3/61baf329cfec3b7f48754fec/help-for-the-next-step.svg"
          }
          title="Contemplative Reptile"
        />
        <FloatingText gutterBottom variant="h4" component="h4">
          Lorem ipsum dolor sit amet.
        </FloatingText>
        <CardActionArea>
          <List>
            <ListItem disablePadding>
              <ListItemButton color={"red"}>
                <Typography gutterBottom variant="h4" component="h4">
                  Become A Time Doneter
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton color="blue">
                <Typography gutterBottom variant="h4" component="h4">
                  Need Help
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </CardActionArea>
      </Card>
    </Container>
  );
};
