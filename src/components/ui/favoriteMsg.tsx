import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFavoriteStore } from "@/store/useFavoriteMessage";
import { CiHeart } from "react-icons/ci";

const FavoriteMsg = () => {
  const favoriteMessages = useFavoriteStore(
    (state) => state.favoriteMessageIds
  );

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size={"sm"}>
            <CiHeart size={28} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[350px]">
          <DialogHeader>
            <DialogTitle>Mensagens favoritas</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <ul>
              {favoriteMessages.map((msgId) => (
                <li key={msgId}>{msgId}</li>
              ))}
            </ul>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FavoriteMsg;
