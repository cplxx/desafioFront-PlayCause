"use client";

import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { Messages as IMessage } from "@/models/messages";

export function useSocket(socketUrl: string) {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const newSocket = io(socketUrl);
    setSocket(newSocket);
  }, [socketUrl]);

  const messageListener = (message: IMessage) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [messageListener]);

  const send = (value: string) => {
    socket?.emit("message", value, token);
    console.log(value, socket);
  };

  return { socket, messages, send };
}
