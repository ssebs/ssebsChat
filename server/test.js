/**
 * test.js - run tests
 */
const fs = require("fs");
const db = require("./db");
const { User, Room, Chat, RoomUser } = require("./models");

const userTests = (db_obj) => {
    const u1 = new User("Seb", "ssebs@ssebs.com", "testpass");

    console.log(db_obj.getUsers());
    db_obj.addUser(u1);
    console.log("Added user");
    console.log(db_obj.getUsers());
    
    const id = db_obj.getUsers()[0].id;
    db_obj.updateUser(id, { ...db_obj.getUser(id), name: "Sebastian Safari" });
    console.log("Updated user");
    console.log(db_obj.getUsers());
    
    db_obj.deleteUser(db_obj.getUsers()[0].id);
    console.log("Deleted user");
    console.log(db_obj.getUsers());
};

const roomTests = (db_obj) => {
    const r1 = new Room("Test room 1");

    console.log(db_obj.getRooms());
    db_obj.addRoom(r1);
    console.log("Added room");
    console.log(db_obj.getRooms());
    
    const id = db_obj.getRooms()[0].id;
    db_obj.updateRoom(id, { ...db_obj.getRoom(id), name: "Updated room name" });
    console.log("Updated room");
    console.log(db_obj.getRooms());
    
    db_obj.deleteRoom(db_obj.getRooms()[0].id);
    console.log("Deleted room");
    console.log(db_obj.getRooms());
};

const chatTests = (db_obj) => {
    const r1 = new Chat("rid1", "uid1", "hello", "2020-06-12T18:17:00");

    console.log(db_obj.getChats());
    db_obj.addChat(r1);
    console.log("Added chat");
    console.log(db_obj.getChats());
    
    const id = db_obj.getChats()[0].id;
    db_obj.updateChat(id, { ...db_obj.getChat(id), name: "Updated chat name" });
    console.log("Updated chat");
    console.log(db_obj.getChats());
    
    db_obj.deleteChat(db_obj.getChats()[0].id);
    console.log("Deleted chat");
    console.log(db_obj.getChats());
};

(() => {
    const fn = "test.json";
    fs.unlink(fn, () => {});

    const db_obj = new db.DB(fn);
    userTests(db_obj);
    roomTests(db_obj)
    chatTests(db_obj)

    fs.unlink(fn, () => {}); 
}
)()