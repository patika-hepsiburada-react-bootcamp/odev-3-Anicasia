import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
    socket = io("https://project-pollapp.herokuapp.com/", { transports: ["websocket"] });

    socket.on("connect", () => {
    console.log("Connected!");
    });

    socket.on("connect_error", () => {
    console.log("Connection Failed!");
    });
};
export const sendPoll = (topic, data) => {
    if (!socket) {
    return false;
    }

  socket.emit(topic, data);
};

export const subscribeToNewPoll = (cb) => {
  if (!socket) {
    return false;
  }

  socket.on("new-poll", (games) => {
    console.log(games);
    cb(games);
  });
};
