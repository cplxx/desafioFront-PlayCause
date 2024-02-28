import { FaUserSecret } from "react-icons/fa6";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { useContext } from "react";
import { AuthContext } from "@/store/auth";
const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="dark:text-gray-300 flex flex-col justify-end">
        <div className="flex items-center gap-5 my-5">
          <Avatar>
            {user?.name && user.name.length > 0 ? (
              <AvatarImage
                src={user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <FaUserSecret
                size={40}
                className="rounded-full text-black dark:text-white"
              />
            )}
            <AvatarFallback className="text-black dark:text-white"></AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <p className="text-black dark:text-white">{user?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
