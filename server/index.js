/**
 * index.js - Entry point to ssebsChat server
 * module name is ssebschat-server
 */
const fs = require("fs");
const db = require("./db");
const { User } = require("./models");

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

const main = () => {
    console.log("Welcome to ssebsChat Server");
    const fn = "test.json";
    fs.unlink(fn, () => {});

    const db_obj = new db.DB(fn);
    userTests(db_obj);

    fs.unlink(fn, () => {});
};

// Entry
main();
