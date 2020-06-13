# server

NodeJS server to handle Chat & other requests.

## Usage
- Dev
  - Clone this repo / folder 
  - cd to it
  - `$ npm i`
  - `$ npm run start`
- Prod
  - Docker?

## Todo:
- [ ] Architect / design how the server will work
  - [x] DB design
  - REST
    - For creating / modifying...
      - Users
      - Rooms
      - RoomUsers
  - Socket.io
    - For creating / modifying...
      - Chats 
- [ ] Implement
  - [ ] DB / Models working
    - [ ] User
    - [ ] Room
    - [ ] Chat
    - [ ] RoomUser
  - [ ] REST
    - [ ] User
    - [ ] Room
    - [ ] RoomUser
  - [ ] Sockets
    - [ ] Chats
- [ ] Serve the React frontend?
- [ ] Make it work with Docker
- [ ] Tests
  - [x] DB In general
  - [ ] Use assert...

## Architecture
- Express app
- Socket IO for message handling
- JSON DB
  - lowdb?
  - Sample DB data:
    - `sampledb.json`
  - Tables:
    - See `db-arch/` folder for csv's
