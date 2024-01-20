import { io } from "socket.io-client";
import { Constants } from "./Constants";

export const socket = io(Constants.serverBaseURL);
socket.on("try", (data) => {
    console.log(data);
});