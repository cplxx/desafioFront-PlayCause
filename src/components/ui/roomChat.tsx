"use client";

import { CiCircleInfo } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Room } from "./room";
import { Separator } from "./separator";

const RoomChat = () => {
  return (
    <section className="w-full border h-screen">
      <Room.Root>
        <Room.Header headersRoom="mobile">
          <h1>Jeremy</h1>
          <div className="flex items-center gap-4">
            <CiCircleInfo className="text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
          </div>
        </Room.Header>
        <Separator />
        <Room.Content>
          
        </Room.Content>
      </Room.Root>
    </section>
  );
};

export default RoomChat;
