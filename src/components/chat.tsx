"use client";
import useFetchMessages from "@/services/getAllMessages";
import Messages from "./user";

const Chat = () => {
  const data = useFetchMessages();

  return (
    <>
      <div className="flex flex-col">
        <Messages initalMessages={data} />
      </div>
    </>
  );
};

export default Chat;
