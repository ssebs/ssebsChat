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

    // chat stuff

    // roomuser stuff
}
exports.DB = DB;
