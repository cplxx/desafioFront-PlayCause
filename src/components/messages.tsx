// messages.js

import React, { useEffect } from "react";
import { useFavoriteStore } from "@/store/useFavoriteMessage";
import { useSocket } from "@/hooks/useSocket";
import { Messages as MessagesType } from "@/models/messages";
import Message from "./user";

const Messages = ({ initalMessages }: { initalMessages: MessagesType[] }) => {
  const { messages } = useSocket();

  const favoriteMessagesIds = useFavoriteStore(
    (state) => state.favoriteMessageIds
  );

  return (
    <div>
      {initalMessages.map((item) => (
        <Message
          key={item.id}
          content={item.content}
          name={item.user.name}
          favoriteMessagesIds={favoriteMessagesIds}
          messageId={item.id}
          token={""}
        />
      ))}
      {messages.length > 0 &&
        messages.map((item) => (
          <Message
            key={item.id}
            content={item.content}
            name={item.user.name}
            favoriteMessagesIds={favoriteMessagesIds}
            messageId={item.id}
            token={""}
          />
        ))}
      {initalMessages.length === 0 && messages.length === 0 && (
        <p>O chat está vazio</p>
      )}
    </div>
  );
};

export default Messages;
