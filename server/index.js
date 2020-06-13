/**
 * index.js - Entry point to ssebsChat server
 * module name is ssebschat-server
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


const main = () => {
    console.log("Welcome to ssebsChat Server");
    const fn = "test.json";
    fs.unlink(fn, () => {});

    const db_obj = new db.DB(fn);
    // userTests(db_obj);
    roomTests(db_obj)

    // fs.unlink(fn, () => {});
};

// Entry
main();
