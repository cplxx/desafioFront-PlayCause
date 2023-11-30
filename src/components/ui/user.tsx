"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Messages from "./messages";
import messages from "./messages";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

const User = () => {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (message: string) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [messageListener]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              className="rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Kevin Kalde</p>
        </div>
        <Messages messages={messages} />
      </div>
    </>
  );
};

export default User;
