"use client";

import { cva } from "styled-system/css";

import type { PropsWithChildren } from "react";
import type { RecipeVariantProps } from "styled-system/css";

type ButtonVariant = RecipeVariantProps<typeof buttonVariant>;

type ButtonProps = PropsWithChildren<
  {
    onClick: () => void;
  } & ButtonVariant
>;

const buttonVariant = cva({
  base: {
    paddingX: 8,
    paddingY: 2,
    fontSize: "sm",
    fontWeight: "bold",
    borderRadius: "full",
    backgroundColor: "neutralMicroContrast",
    marginTop: "auto",
    cursor: "pointer",
  },
  variants: {
    intent: {
      follow: {
        color: "white",
        backgroundColor: "primary",
      },
      unfollow: {
        backgroundColor: "neutralMicroContrast",
      },
      subscribe: {
        backgroundColor: "subscription",
      },
    },
  },
});

export default function Button({ children, intent, onClick }: ButtonProps) {
  return (
    <button className={buttonVariant({ intent })} onClick={onClick}>
      {children}
    </button>
  );
}
