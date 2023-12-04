import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { useSocket } from "@/hooks/useSocket";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const { send } = useSocket();

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      send(value);
      setValue("");
    }
  };

  return (
    <div className="w-full flex mx-4 gap-2">
      <Input
        placeholder="Digite a sua mensagem..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        className="h-12"
      />
    </div>
  );
};

export default MessageInput;
