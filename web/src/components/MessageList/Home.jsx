import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
import { BASE_URL } from "../../Util";

const sampleConvos = [
    {
        id: "foa12sqd",
        roomName: "Test room 1",
        lastPerson: "person1",
        lastMsg: "Yo what's up?",
        sentAt: new Date("2020-06-10"),
    },
    {
        id: "fsdh1jjk",
        roomName: "Self room",
        lastPerson: "bot",
        lastMsg:
            "This is the self room, where you can chat with yourself for notes.",
        sentAt: new Date("2020-06-09"),
    },
];

const Home = (props) => {
    const [convos, setConvos] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/convos`)
            .then((r) => r.json())
            .then((resp) => {
                // console.log(resp);
                setConvos(resp);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Home page</h1>
            {convos && (
                <>
                    {convos.map((convo) => (
                        <ListItem
                            id={convo.roomID}
                            key={convo.roomID}
                            roomName={convo.roomName}
                            lastPerson={convo.lastPerson}
                            lastMsg={convo.lastMsg}
                            sentAt={convo.sentAt}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Home;
