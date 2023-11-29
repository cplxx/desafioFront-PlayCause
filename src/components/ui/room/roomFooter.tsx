import { tv, VariantProps } from "tailwind-variants";

type footerProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof footer>;

const footer = tv({
  base: "",
  variants: {
    footerRoom: {
      roomFooter: "text-lg",
    },
  },
});

export function RoomFooter({
  children,
  className,
  footerRoom,
  ...rest
}: footerProps) {
  return (
    <div {...rest} className={footer({ footerRoom })}>
      {children}
    </div>
  );
}
