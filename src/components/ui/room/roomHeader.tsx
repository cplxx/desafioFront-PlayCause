import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export type RoomHeaderProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof headers>;

const headers = tv({
  base: "w-full p-4",
  variants: {
    headersRoom: {
      mobile: "flex items-center justify-between",
    },
  },
});

export function RoomHeader({
  children,
  headersRoom,
  ...rest
}: RoomHeaderProps) {
  return (
    <div {...rest} className={headers({ headersRoom })}>
      {children}
    </div>
  );
}
