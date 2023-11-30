import React from "react";

const Messages = ({ messages }: { messages: string[] }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div className="pl-14 dark:text-gray-300" key={index}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default Messages;
