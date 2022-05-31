import React, { useState } from "react";
import {
    getContentByURL,
    getEntries,
    createEntry,
    getScheduleBasedOnUser
} from "../service/contentstackSDK";

const MDTest = (props) => {
    const [res, setData] = useState(props.response);
    const [title, setTitle] = useState("");
    const [topics, setTopics] = useState("");
    const [personName, setPersonName] = useState("");
    const [meetingId, setMeetingId] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [msg, setMsg] = useState("");

    const entryData = {
        entry: {
            "title": title,
            "topics": topics,
            "display_name": personName,
            "meeting_id": meetingId,
            "date": dateTime,
            "user_details": [
                {
                    "uid": "blt61c03f1f64c24ccb",
                    "_content_type_uid": "user"
                }
            ],
        }
    }

    const onsubmit = async (e) => {
        //console.log(entryData)
        const result = await createEntry("schedule", "en-us", JSON.stringify(entryData));
        //console.log('==Entry Created===>\n', result)
        setMsg(result);
    }

    // console.log(res)
    return (
        <div>
            <h1>{res.header.title}</h1>
            <h1>{res.footer.title}</h1>
            <hr />
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                /><br />
                <select size="1" value={topics} onChange={(e) =>setTopics(e.target.value)}>
                    <option value="Share Your Stories">Share Your Stories</option>
                    <option value="Motivational">Motivational</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Nature">Nature</option>
                    <option value="Travel">Travel</option>                    
                </select>
                <br />
                <input
                    type="text"
                    placeholder="Display Name"
                    onChange={(e) => {
                        setPersonName(e.target.value);
                    }}
                /><br />
                <input
                    type="text"
                    placeholder="Meeting Id"
                    onChange={(e) => {
                        setMeetingId(e.target.value);
                    }}
                /><br />
                <input
                    type="text"
                    placeholder="Date (YYYY-MM-DD)"
                    onChange={(e) => {
                        setDateTime(e.target.value);
                    }}
                /><br />
                <button onClick={onsubmit}>Schedule an Meet</button>
                <br />
                <h3>{msg}</h3>
            </div>
            <hr />
            <table border='1'>
                <tr>
                    <th>Sr.No</th>
                    <th>Title</th>
                    <th>Topics</th>
                    <th>Display Name</th>
                    <th>Meeting Id</th>
                    <th>Date</th>
                </tr>
                {res.schedule.map((current, key) => {
                    return (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{current.title}</td>
                            <td>{current.topics}</td>
                            <td>{current.display_name}</td>
                            <td>{current.meeting_id}</td>
                            <td>{current.date}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export const getServerSideProps = async () => {
    //const response = await getContentByURL("home_page", "home", "en-us", []);
    const header = await getEntries("header", "en-us", []);
    const footer = await getEntries("footer", "en-us", []);
    const schedule = await getScheduleBasedOnUser("schedule", "user", "en-us", "Counselor");
    // const schedule = await getScheduleBasedOnUser("schedule","user", "en-us", "Volunteer");
    // const schedule = await getScheduleBasedOnUser("schedule","user", "en-us", "Donar");
    // console.log('schedule====>\n', schedule);
    // const response = await getEntries("home_page", "en-us", []);
    return {
        props: {
            response: { header: header, footer: footer, schedule: schedule }
        },
    };
};

export default MDTest;