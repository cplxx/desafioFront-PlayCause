import { toggleFavoriteMessage } from "@/store/useFavoriteMessage";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./button";
import usePostFavoriteMsg from "@/services/postAllFavoritesMsg";

interface MessageProps {
  name: string;
  content: string;
  favoriteMessagesIds?: string[];
  messageId: number;
}

const Message = ({
  name,
  content,
  favoriteMessagesIds,
  messageId,
}: MessageProps) => {
  const mutation = usePostFavoriteMsg();

  const HandleFavClick = (messageId: number) => {
    mutation.mutate(messageId);
    toggleFavoriteMessage(content);
  };

  return (
    <>
      <div className="pl-14 dark:text-gray-300">
        <div className="flex items-center gap-4 mt-5">
          <Avatar>
            <AvatarImage
              src={"https://github.com/cplxx.png"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full">
            <p>{name}</p>
            <div className="flex items-center justify-between w-full">
              <p>{content}</p>
              <Button
                variant={"destructive"}
                onClick={() => {
                  HandleFavClick(messageId);
                }}
              >
                {favoriteMessagesIds?.includes(content)
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
