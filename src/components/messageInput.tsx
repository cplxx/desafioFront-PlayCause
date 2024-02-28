import React, { useState } from "react";
import { Button } from "./ui/button";
import { useSocket } from "@/hooks/useSocket";
import { Textarea } from "./ui/textarea";
import { RiSendPlaneLine } from "react-icons/ri";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const { send } = useSocket();

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(value);
      setValue("");
    }
  };

  const handleButtonClick = () => {
    send(value);
    setValue("");
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center px-5 lg:px-0 mb-5 gap-2">
      <Textarea
        placeholder="Escreva a sua mensagem"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="relative"
      />
      <Button
        className="absolute left-[80%] lg:left-[74%]"
        variant={"outline"}
        onClick={handleButtonClick}
      >
        <RiSendPlaneLine />
      </Button>
    </div>
  );
};

export default MessageInput;
