import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

const MessageInput = ({ send }: { send: (val: string) => void }) => {
  const [value, setValue] = useState("");

  
  return (
    <>
      <Input
        placeholder="type your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => send(value)}>Send</Button>
    </>
  );
};

export default MessageInput;
