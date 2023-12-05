import { FaStar } from "react-icons/fa";
import { ModeToggle } from "./toogleMode";
import FavoriteMsg from "./favoriteMsg";
import FavoriteMsgCopy from "./editProfileModal";

const HeaderChatRoom = () => {
  return (
    <>
      <h1 className="text-black dark:text-white">Jeremy</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <FavoriteMsg />
        <FavoriteMsgCopy />
      </div>
    </>
  );
};

export default HeaderChatRoom;
