import { tv, VariantProps } from "tailwind-variants";

type bodyProps = React.HTMLProps<HTMLDivElement> & VariantProps<typeof root>;

const root = tv({
  base: "text-lg",
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
