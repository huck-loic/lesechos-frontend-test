"use client";

import { cva, css } from "styled-system/css";

import type { PropsWithChildren } from "react";
import type { RecipeVariantProps } from "styled-system/css";
import Loader from "../Loader";

type ButtonVariant = RecipeVariantProps<typeof buttonVariant>;

type ButtonProps = PropsWithChildren<
  {
    onClick: () => void;
    isLoading: boolean;
  } & ButtonVariant
>;

const buttonVariant = cva({
  base: {
    position: "relative",
    paddingX: 6,
    paddingY: 3,
    fontSize: "sm",
    lineHeight: 1.1,
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
        color: "white",
        backgroundColor: "neutralHighContrast",
      },
      subscribe: {
        backgroundColor: "subscription",
      },
    },
    isLoading: {
      true: {
        paddingRight: 10,
      },
    },
  },
});

const loaderStyle = css({
  position: "absolute",
  top: 0,
  right: 4,
  bottom: 0,
  margin: "auto",
});

export default function Button({
  children,
  intent,
  isLoading,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={buttonVariant({ intent, isLoading })}
      onClick={onClick}
      disabled={isLoading}>
      {children}
      {isLoading && <Loader className={loaderStyle} />}
    </button>
  );
}
