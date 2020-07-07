/**
 * models.js - DB object models
 */

const getID = () => {
    return new Date().getTime().toString(36);
};

class User {
    constructor(name, email, passwordHash) {
        this.id = getID();
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
    }
    // toString(){
    //     return `${this.id}, ${this.name}, ${this.email}`
    // }
}
class Room {
    constructor(name) {
        this.id = getID();
        this.name = name;
    }
}
class Chat {
    constructor(roomID, userID, msg, sent) {
        this.id = getID();
        this.roomID = roomID;
        this.userID = userID;
        this.msg = msg;
        this.sent = new Date(sent);
    }
}
class RoomUser {
    constructor(roomID, userID) {
        this.id = getID();
        this.roomID = roomID;
        this.userID = userID;
    }
}

class Convo {
    constructor(roomID, roomName, lastPerson, lastMsg, sentAt) {
        this.roomID = roomID;
        this.roomName = roomName;
        this.lastPerson = lastPerson;
        this.lastMsg = lastMsg;
        this.sentAt = sentAt;
    }
}

module.exports.User = User;
module.exports.Room = Room;
module.exports.Chat = Chat;
module.exports.RoomUser = RoomUser;
module.exports.Convo = Convo;
