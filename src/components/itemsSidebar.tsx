import React from "react";
import { VariantProps, tv } from "tailwind-variants";
import { Button } from "./ui/button";
import { Separator } from "./separator";
import Profile from "./ui/profile";

const itemsSidebar = tv({
  base: "dark:bg-[#343434] bg-[#F5F7F8] flex flex-col h-screen lg:p-5",
  variants: {
    itemsSidebarTv: {
      mobile: "block lg:hidden",
      desktop: "hidden lg:flex",
    },
  },
});

type ItemsSidebarProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof itemsSidebar>;

const ItemsSidebar = ({ itemsSidebarTv }: ItemsSidebarProps) => {
  return (
    <div className={itemsSidebar({ itemsSidebarTv })}>
      <div>
        <h2 className="text-black dark:text-white">Grupo</h2>
      </div>
      <Separator />
      <Button variant={"secondary"} className="mt-5">
        Play a cause
      </Button>
      <div className="lg:mt-auto mt-[600px]">
        <Separator />
        <Profile />
      </div>
    </div>
  );
};

export default ItemsSidebar;
