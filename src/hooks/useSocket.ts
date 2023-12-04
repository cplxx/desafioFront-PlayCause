import { Messages } from "@/models/messages";
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";

export function useSocket() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<Messages[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, []);

  const messageListener = (message: Messages) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [socket]);

  const send = (value: string) => {
    socket?.emit("message", value, token);
    console.log(value, socket);
  };

  return { socket, messages, send };
}
