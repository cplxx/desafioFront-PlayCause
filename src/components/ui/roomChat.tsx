"use client";

import HeaderChatRoom from "./headerChatRoom";
import { Room } from "./room";
import { Separator } from "./separator";
import User from "./user";

const RoomChat = () => {
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
      </Room.Root>
    </section>
  );
};

export default RoomChat;
