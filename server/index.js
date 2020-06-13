/**
 * index.js - Entry point to ssebsChat server
 * module name is ssebschat-server
 */
const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const db = require("./db");
const { User, Room, Chat, RoomUser } = require("./models");

const main = () => {
    console.log("Welcome to ssebsChat Server");
    const fn = "dev.json";
    // fs.unlink(fn, () => {});
    const db_obj = new db.DB(fn);
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("<h1>ssebsChat server</h1>");
    });

    // Users routes
    app.get("/users", (req, res) => {
        res.send(db_obj.getUsers());
    });
    app.get("/users/:id", (req, res) => {
        res.send(db_obj.getUser(req.params.id));
    });
    app.post("/users", (req, res) => {
        const { name, email, passwordHash } = req.body;
        const newUser = new User(name, email, passwordHash);
        db_obj.addUser(newUser);

        res.send(db_obj.getUsers());
    });
    app.put("/users/:id", (req, res) => {
        const { name, email, passwordHash } = req.body;
        const updatedUser = new User(name, email, passwordHash)
        res.send(db_obj.updateUser(req.params.id, updatedUser))
    });
    app.delete("/users/:id", (req, res) => {
        res.send(db_obj.deleteUser(req.params.id))
    });

    // Room routes
    app.get("/rooms", (req, res) => {
        res.send(db_obj.getRooms());
    });
    app.get("/rooms/:id", (req, res) => {
        res.send(db_obj.getRoom(req.params.id));
    });
    app.post("/rooms", (req, res) => {
        const { name, email, passwordHash } = req.body;
        const newRoom = new Room(name, email, passwordHash);
        db_obj.addRoom(newRoom);

        res.send(db_obj.getRooms());
    });
    app.put("/rooms/:id", (req, res) => {
        const { name, email, passwordHash } = req.body;
        const updatedRoom = new Room(name, email, passwordHash)
        res.send(db_obj.updateRoom(req.params.id, updatedRoom))
    });
    app.delete("/rooms/:id", (req, res) => {
        res.send(db_obj.deleteRoom(req.params.id))
    });

    // Chat routes
    // Should use socket.io
    io.on('connection', (socket) => {
        console.log('User connected');
        socket.on("chat", (msg)=> {
            console.log(msg)
        })
    });


    // main listener
    http.listen(3000, () => {
        console.log("Listening on :3000");
    });
    // fs.unlink(fn, () => {});
};

// Entry
main();
