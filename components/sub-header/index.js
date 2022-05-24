import { useState } from "react";
import { Box, Tab, Tabs } from "./subHeder.style";
import { useRouter } from "next/router";

const LinkTab = (props) => {
  const router = useRouter();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        router.push(props.href);
      }}
      {...props}
    />
  );
};

export const SubHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            top: 0,
          },
        }}
      >
        <LinkTab label="Page One" href="/" />
        <LinkTab label="Page Two" href="/" />
        <LinkTab label="Page Three" href="/" />
      </Tabs>
    </Box>
  );
};
