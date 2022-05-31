import React, { useState } from "react";
import { getContentByURL, getEntries } from "../service/contentstackSDK";
import { TimeDoNeed } from "../templates/TimeNeed";

const Home = (props) => {
  const [data, setData] = useState(props.response);
  return <TimeDoNeed />;
};

export const getServerSideProps = async () => {
  //const response = await getContentByURL("home_page", "home", "en-us", []);
  const header = await getEntries("header", "en-us", []);
  const footer = await getEntries("footer", "en-us", []);
  //const response = await getEntries("home_page", "en-us", []);
  return {
    props: {
      response: { header: header, footer: footer },
    },
  };
};

export default Home;
