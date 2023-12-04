import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import useFetchMessages from "@/services/getAllMessages";
import {
  toggleFavoriteMessage,
  useFavoriteStore,
} from "@/store/useFavoriteMessage";
import { Button } from "./button";

const Messages = () => {
  const { data } = useFetchMessages();

  const favoriteMessagesIds = useFavoriteStore(
    (state) => state.favoriteMessageIds
  );

  return (
    <div>
      {data ? (
        data.map((item, index) => (
          <div className="pl-14 dark:text-gray-300" key={index}>
            <div key={item.id} className="flex items-center gap-4 mt-5">
              <Avatar>
                <AvatarImage
                  src={"https://github.com/cplxx.png"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <AvatarFallback>{item.user.name}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <p>{item.user.name}</p>
                <div className="flex items-center justify-between w-full">
                  <p>{item.content}</p>
                  <Button
                    variant={"destructive"}
                    onClick={() => {
                      toggleFavoriteMessage(item.content);
                      console.log(item.content);
                    }}
                  >
                    {favoriteMessagesIds.includes(item.content)
                      ? "Remove from favorites"
                      : "Add to favorites"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>O chat está vazio</p>
      )}
    </div>
  );
};

export default Messages;
