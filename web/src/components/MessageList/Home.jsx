import React from "react";

import ListItem from "./ListItem";

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
    return (
        <div>
            <h1>Home page</h1>
            {sampleConvos.map((room) => (
                <ListItem
                    id={room.id}
                    key={room.id}
                    roomName={room.roomName}
                    lastPerson={room.lastPerson}
                    lastMsg={room.lastMsg}
                    sentAt={room.sentAt}
                />
            ))}
            <p>*List conversations here*</p>
        </div>
    );
};

export default Home;
