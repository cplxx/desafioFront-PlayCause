import { tv, VariantProps } from "tailwind-variants";

type bodyProps = React.HTMLProps<HTMLDivElement> & VariantProps<typeof root>;

const root = tv({
  base: "w-full flex overflow-y-auto items-start h-screen p-6 gap-10 text-xs",
  variants: {
    roomContent: {},
  },
});

export function RoomContent({ children, roomContent, ...rest }: bodyProps) {
  return (
    <div {...rest} className={root({ roomContent })}>
      {children}
    </div>
  );
}
