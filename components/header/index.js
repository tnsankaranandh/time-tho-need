import { AppBar, Box, Typography, Toolbar, Button } from "./header.style";
import { SubHeader } from "../sub-header";

export const Header = () => {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" component="div">
              Donate Youre time
            </Typography>
            <Button color="inherit">Login</Button>
            <a href='home'>Home</a>
          </Toolbar>
          <Toolbar>
            <SubHeader />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
