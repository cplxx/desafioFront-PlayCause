import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const User = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              className="rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Kevin Kalde</p>
        </div>
        <p className="pl-14 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          provident libero iusto quae sint, labore aliquid omnis ipsam deserunt
          dolor laborum, qui dolores at atque rem! Quasi accusantium quibusdam
          numquam!
        </p>
      </div>
    </>
  );
};

export default User;
