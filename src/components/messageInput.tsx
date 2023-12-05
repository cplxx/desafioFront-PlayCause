import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSocket } from "@/hooks/useSocket";
import { Textarea } from "./ui/textarea";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const { send } = useSocket();

  return (
    <div className="grid w-full mx-10 mb-5 gap-2">
      <Textarea
        placeholder="Escreva a sua mensagem"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => send(value)}>Enviar mensagem</Button>
    </div>
  );
};

export default MessageInput;
