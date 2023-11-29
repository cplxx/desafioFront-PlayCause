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
            <div className=" flex items-start pt-5 justify-center  h-screen bg-[#343434]">
              <SheetTrigger className="md:hidden ">
                <RxHamburgerMenu size={20} />
              </SheetTrigger>
            </div>
            <SheetContent side={"left"} className="bg-[#343434]">
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
