"use client";

import React, { useState, useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";
import HeaderChatRoom from "./headerChatRoom";
import { Room } from "./room";
import { Separator } from "./separator";
import User from "./user";
import MessageInput from "./messageInput";
import Messages from "./messages";

type Message = {
  content: string;
  userId: number;
};

const RoomChat = () => {
  const [socket, setSocket] = useState<Socket>();

  const send = (value: string) => {
    socket?.emit("message", value);
  };
  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    setSocket(newSocket);
  }, [setSocket]);

  return (
    <section className="w-full border h-screen">
      <Room.Root>
        <Room.Header headersRoom="mobile">
          <HeaderChatRoom />
        </Room.Header>
        <Separator />
        <Room.Content>
          <User />
        </Room.Content>
        <Room.Footer>
          <MessageInput send={send} />
        </Room.Footer>
      </Room.Root>
    </section>
  );
};

export default RoomChat;
