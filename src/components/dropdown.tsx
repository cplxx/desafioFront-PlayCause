import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineEdit } from "react-icons/md";
import { FiTrash } from "react-icons/fi";

export const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-black">...</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-black flex items-center gap-2">
          <MdOutlineEdit />
          Renomear
        </DropdownMenuItem>
        <DropdownMenuItem className="text-black flex items-center gap-2">
          <FiTrash color={"red"} />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
