import useFetchUser from "@/services/getUserById";
import { FaUserSecret } from "react-icons/fa6";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
const Profile = () => {
  const { data, isLoading } = useFetchUser(2);
  if (isLoading) return;

  console.log(data);

  return (
    <>
      <div className="dark:text-gray-300 flex flex-col justify-end">
        <div className="flex items-center gap-5 my-5">
          <Avatar>
            {data?.name && data.name.length > 0 ? (
              <AvatarImage
                src={data.name}
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
            <p className="text-black dark:text-white">{data?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
