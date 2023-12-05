import useFetchUser from "@/services/getUserById";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { FaUserSecret } from "react-icons/fa6";
const Profile = () => {
  const { data } = useFetchUser();
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
            <p className="text-black dark:text-white">yan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
