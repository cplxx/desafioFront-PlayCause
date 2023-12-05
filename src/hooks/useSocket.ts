import { Messages } from "@/models/messages";
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";

export function useSocket() {
  const [socket, setSocket] = useState<Socket | undefined>();
  const [messages, setMessages] = useState<Messages[]>([]);
  const token =
    typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const newSocket = io("NEXT_PUBLIC_API_URL");
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const messageListener = (message: Messages) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    if (socket) {
      socket.on("message", messageListener);
      return () => {
        socket.off("message", messageListener);
      };
    }
  }, [socket]);

  const send = (value: string) => {
    // Ensure socket and token are defined before attempting to use them
    if (socket && token) {
      socket.emit("message", value, token);
      console.log(value, socket);
    }
  };

  return { socket, messages, send };
}
