import { Button } from "./button";
import ItemsSidebar from "./itemsSidebar";
import Room from "./itemsSidebar";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  return (
    <>
      <aside className="lg:w-[15%] w-[10%] h-screen text-white">
        <div className="block lg:hidden">
          <Sheet>
            <div className=" flex items-start pt-5 justify-center  h-screen dark:bg-[#292b2f] bg-[#F5F7F8]">
              <SheetTrigger className="md:hidden text-black dark:text-white ">
                <RxHamburgerMenu size={20} />
              </SheetTrigger>
            </div>
            <SheetContent
              side={"left"}
              className="dark:bg-[#343434] bg-[#F5F7F8]"
            >
              <ItemsSidebar itemsSidebarTv="mobile" />
            </SheetContent>
          </Sheet>
        </div>
        <ItemsSidebar itemsSidebarTv="desktop" />
      </aside>
    </>
  );
};

export default Sidebar;
