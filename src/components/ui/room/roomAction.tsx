"use client";

import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const colors = tv({
  base: "shadow",
  variants: {
    color: {
      none: "bg-transparent",
      primary:
        "bg-[#610C9F] hover:bg-[#610C9F]/90 rounded-lg px-4 py-1 w-[220px] h-[48px] text-white mb-10 shadow",
    },
  },
});

type actionProps = ComponentProps<"button"> & VariantProps<typeof colors>;

export function RoomAction({
  children,
  color,
  onClick,
  onSubmit,
  ...rest
}: actionProps) {
  return (
    <button {...rest} className={colors({ color })}>
      {children}
    </button>
  );
}
