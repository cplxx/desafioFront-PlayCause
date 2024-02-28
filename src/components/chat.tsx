"use client";
import useFetchMessages from "@/services/getAllMessages";
import { AuthContext } from "@/store/auth";
import { useContext } from "react";
import Messages from "./messages";

const Chat = () => {

  const { token} = useContext(AuthContext)
  console.log(token);
  const data = useFetchMessages({ token });

  return (
    <>
      <div className="flex flex-col">
        <Messages initalMessages={data} />
      </div>
    </>
  );
};

export default Chat;
