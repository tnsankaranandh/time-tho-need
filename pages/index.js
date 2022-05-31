import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import HomePage from "../templates/Home";
import { getContentByURL, getEntries } from "../service/contentstackSDK";

export default function Home(props) {
  const [data, setData] = useState(props);

  const data1 = {
    cmsdata: { ...data },
  };
  return (
    <>
      {data1 && Object.keys(data1?.cmsdata).length && <HomePage data={data1} />}
    </>
  );
}

export const getServerSideProps = async () => {
  const home = await getContentByURL("home_page", "", "en-us", [
    "article.article_and_videos",
    "testimonial.volunteers",
  ]);
  const header = await getEntries("header", "en-us", []);
  const footer = await getEntries("footer", "en-us", []);

  return {
    props: {
      header: header,
      footer: footer,
      home: home,
    },
  };
};
