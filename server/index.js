/**
 * index.js - Entry point to ssebsChat server
 * module name is ssebschat-server
 */
const db = require("./db");
const { User } = require("./models")

const main = () => {
    console.log("Welcome to ssebsChat Server");
    const db_obj = new db.DB();
    console.log("Users: ");
    console.log(db_obj.getUsers());
    
    const u1 = new User("Seb", "ssebs@ssebs.com", "testpass");
    // console.log(u1);
    // db_obj.addUser(u1)
    // console.log(db_obj.getUser("kbcxh9u1"));
    // db_obj.updateUser("kbcxh9u1", {...db_obj.getUser("kbcxh9u1"), name: "Sebastian Safari"})
    // db_obj.deleteUser(
    //     db_obj.getUsers()[0].id
    // )
    console.log("Users: ");
    console.log(db_obj.getUsers());
};

// Entry
main();
