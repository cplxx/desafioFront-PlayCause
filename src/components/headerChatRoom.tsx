import { FaStar } from "react-icons/fa";
import { ModeToggle } from "./toogleMode";
import FavoriteMsg from "./favoriteMsg";
import EditProfile from "./ui/editProfile";

const HeaderChatRoom = () => {
  return (
    <>
      <h1 className="text-black dark:text-white">Play a cause</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <FavoriteMsg />
        <EditProfile />
      </div>
    </>
  );
};

export default HeaderChatRoom;
