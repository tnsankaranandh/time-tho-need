import React, { useState } from "react";
import {
    getContentByURL,
    getEntries
} from "../service/contentstackSDK";

const Home = (props) => {
    const [res, setData] = useState(props.response);
    return (
        <div>
            <h1>{res.header.title}</h1>
            <h1>{res.footer.title}</h1>
        </div>
    );
};

export const getServerSideProps = async () => {
    //const response = await getContentByURL("home_page", "home", "en-us", []);
    const header = await getEntries("header", "en-us", []);
    const footer = await getEntries("footer", "en-us", []);
    //const response = await getEntries("home_page", "en-us", []);
    return {
        props: {
            response: { header: header, footer: footer }
        },
    };
};

export default Home;