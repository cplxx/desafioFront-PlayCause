"use client";

import HeaderChatRoom from "./headerChatRoom";
import { Room } from "./room";
import { Separator } from "./separator";
import MessageInput from "./messageInput";
import Chat from "./chat";

const RoomChat = () => {
  return (
    <section className="w-full h-screen">
      <Room.Root>
        <Room.Header headersRoom="mobile">
          <HeaderChatRoom />
        </Room.Header>
        <Separator />
        <Room.Content>
          <Chat />
        </Room.Content>
        <Room.Footer>
          <MessageInput />
        </Room.Footer>
      </Room.Root>
    </section>
  );
};

export default RoomChat;
