"use client";

import "react-toastify/dist/ReactToastify.css";
import ConstantsWrapper from "./wrappers/ConstantsWrapper";
import { twMerge } from "tailwind-merge";
import { feSchriftFont } from "@/styles/fonts";
import { socket } from "@/classes/SocketIO";

export default function Home() {
  socket.emit("try", "Hello from client");
  return (
    <div className={twMerge("w-full h-full", feSchriftFont)}>
      <ConstantsWrapper />
    </div>
  );
}
