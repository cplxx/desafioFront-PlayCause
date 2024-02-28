import { Messages } from "@/models/messages";
import { AuthContext } from "@/store/auth";
import { useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export function useSocket() {
  const [socket, setSocket] = useState<Socket | undefined>();
  const [messages, setMessages] = useState<Messages[]>([]);
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const newSocket = io("http://localhost:3003");
    setSocket(newSocket);

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
    if (socket && token) {
      socket.emit("message", value, token);
      console.log(value, socket);
    }
  };

  return { socket, messages, send };
}
