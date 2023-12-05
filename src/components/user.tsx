import { toggleFavoriteMessage } from "@/store/useFavoriteMessage";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import usePostFavoriteMsg from "@/services/postFavoritesMsg";
import { FaHeartCircleCheck, FaHeartCrack } from "react-icons/fa6";

interface MessageProps {
  name: string;
  content: string;
  favoriteMessagesIds?: string[];
  messageId: number;
  token: string;
}

const Message = ({
  content,
  messageId,
  name,
  favoriteMessagesIds,
}: MessageProps) => {
  const mutation = usePostFavoriteMsg();

  const HandleFavClick = (messageId: number) => {
    mutation.mutate(messageId);
    toggleFavoriteMessage(content);
  };

  return (
    <>
      <div className=" dark:text-gray-300">
        <div className="flex items-center gap-5 my-5">
          <Avatar>
            <AvatarImage
              src={"/play.png"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p>{name}</p>
            <div className="flex items-center ">
              <p className="">{content}</p>
              <Button
                className="opacity-10"
                size={"sm"}
                variant={"link"}
                onClick={() => {
                  HandleFavClick(messageId);
                }}
              >
                {favoriteMessagesIds?.includes(content) ? (
                  <FaHeartCrack />
                ) : (
                  <FaHeartCircleCheck />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
