/**
 * db.js - Handle DB operations
 */
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

class DB {
    constructor(filename) {
        this.fn = filename ? filename : "db.json";

        const adapter = new FileSync(this.fn);
        this.db = low(adapter);
        this.db
            .defaults({
                users: [],
                rooms: [],
                chats: [],
                roomUsers: [],
            })
            .write();
        this.db.read();
        console.log("DB loaded");
    }
    // user stuff
    addUser(userObj) {
        return this.db.get("users").push(userObj).write();
    }
    getUsers() {
        return this.db.get("users").value();
    }
    getUser(id) {
        return this.db.get("users").find({ id: id }).value();
    }
    updateUser(id, userObj) {
        const usr = this.db.get("users").find({ id: id });
        return usr.assign(userObj).write();
    }
    deleteUser(id) {
        return this.db.get("users").remove({ id: id }).write();
    }
    
    // room stuff
    addRoom(roomObj) {
        return this.db.get("rooms").push(roomObj).write();
    }
    getRooms() {
        return this.db.get("rooms").value();
    }
    getRoom(id) {
        return this.db.get("rooms").find({ id: id }).value();
    }
    updateRoom(id, roomObj) {
        const room = this.db.get("rooms").find({ id: id });
        return room.assign(roomObj).write();
    }
    deleteRoom(id) {
        return this.db.get("rooms").remove({ id: id }).write();
    }

    // chat stuff
    addChat(chatObj) {
        return this.db.get("chats").push(chatObj).write();
    }
    getChats() {
        return this.db.get("chats").value();
    }
    getChat(id) {
        return this.db.get("chats").find({ id: id }).value();
    }
    updateChat(id, chatObj) {
        const chat = this.db.get("chats").find({ id: id });
        return chat.assign(chatObj).write();
    }
    deleteChat(id) {
        return this.db.get("chats").remove({ id: id }).write();
    }


    // roomuser stuff
}
exports.DB = DB;
