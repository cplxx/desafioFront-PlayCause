// messages.js

import React, { useEffect } from "react";
import { useFavoriteStore } from "@/store/useFavoriteMessage";
import { useSocket } from "@/hooks/useSocket";
import { Messages as MessagesType } from "@/models/messages";
import Message from "./message";

const Messages = ({ initalMessages }: { initalMessages: MessagesType[] }) => {
  const { messages } = useSocket();
  console.log(initalMessages);
  const favoriteMessagesIds = useFavoriteStore(
    (state) => state.favoriteMessageIds
  );

  useEffect(() => {
    console.log("New message received:", messages);
  }, [messages]);

  return (
    <div>
      {initalMessages.map((item) => (
        <Message key={item.id} content={item.content} name={item.user.name} />
      ))}
      {messages.length > 0 &&
        messages.map((item) => (
          <Message
            key={item.id}
            content={item.content}
            name={item.user.name}
            favoriteMessagesIds={favoriteMessagesIds}
          />
        ))}
      {initalMessages.length === 0 && messages.length === 0 && (
        <p>O chat está vazio</p>
      )}
    </div>
  );
};

export default Messages;
