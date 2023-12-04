// MessageInput.tsx
import React, { useState } from "react";
import { Input } from "./input";
import { useSocket } from "@/hooks/useSocket";
import useMessageStore from "@/store/message";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const { send } = useSocket("http://localhost:8001");
  const { addMessage } = useMessageStore();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("chegou", value);
      send(value);
      setValue("");

      addMessage(value);
    }
  };

  return (
    <div className="w-full flex mx-4 gap-2">
      <Input
        placeholder="type your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        className="h-12"
      />
    </div>
  );
};

export default MessageInput;
