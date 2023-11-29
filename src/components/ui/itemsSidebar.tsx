import { VariantProps, tv } from "tailwind-variants";
import { Button } from "./button";
import { Separator } from "./separator";

type ItemsSidebarProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof itemsSidebar>;

const itemsSidebar = tv({
  base: "bg-[#343434] h-screen lg:p-5 ",
  variants: {
    itemsSidebarTv: {
      mobile: "block lg:hidden",
      desktop: "hidden lg:block",
    },
  },
});

const ItemsSidebar = ({ itemsSidebarTv }: ItemsSidebarProps) => {
  return (
    <div className={itemsSidebar({ itemsSidebarTv })}>
      <h1>Direct Messages</h1>
      <Separator />
      <ul className="mt-5">
        <li>
          <Button variant={"link"} className="text-lg text-white">
            Jeremy
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ItemsSidebar;
