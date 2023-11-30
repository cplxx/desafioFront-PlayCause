import { tv, VariantProps } from "tailwind-variants";
export type RoomProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof root>;

const root = tv({
  base: "w-full border flex flex-col h-screen shadow dark:bg-[#212121] ",
  variants: {
    roots: {
      mobile: "bg-red-400",
    },
  },
});

export function RoomRoot({ children, roots, ...rest }: RoomProps) {
  return (
    <div {...rest} className={root({ roots })}>
      {children}
    </div>
  );
}
