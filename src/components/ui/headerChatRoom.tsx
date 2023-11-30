import { CiCircleInfo } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ModeToggle } from "./toogleMode";

const HeaderChatRoom = () => {
  return (
    <>
      <h1 className="text-black dark:text-white">Jeremy</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <CiCircleInfo className="text-xl" />
        <FaStar className="text-yellow-400 text-xl" />
      </div>
    </>
  );
};

export default HeaderChatRoom;
