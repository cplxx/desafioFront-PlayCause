import React from "react";
import { VariantProps, tv } from "tailwind-variants";
import { Button } from "./ui/button";
import { Separator } from "./separator";
import { RiEditBoxLine } from "react-icons/ri";
import { Dropdown } from "./dropdown";

const itemsSidebar = tv({
  base: "dark:bg-[#343434] bg-[#F5F7F8] flex flex-col h-screen lg:pt-7 px-4",
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
      <div className="flex items-center justify-between text-black">
        <h2>Novo chat</h2>
        <span className="cursor-pointer">
          <RiEditBoxLine />
        </span>
      </div>
      <Separator className="w-full" />
      <div className="mt-5 flex justify-between items-center">
        <span className="hover:underline text-black ">Play a cause</span>
        <Dropdown />
      </div>
    </div>
  );
};

export default ItemsSidebar;
