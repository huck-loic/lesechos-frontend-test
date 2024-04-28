"use client";

import { useState, useTransition } from "react";
import { toggleFollow } from "@/services/follow/actions";
import Button from "../Button";

type NewsletterButtonProps = {
  hasSubscription: boolean;
};

export default function NewsletterButton({
  hasSubscription,
}: NewsletterButtonProps) {
  const [follow, setFollow] = useState(false);
  const [isLoading, startFollow] = useTransition();

  function handleFollow() {
    if (isLoading) {
      return;
    }

    if (!hasSubscription) {
      // TODO: Replace with a polymophic button/link
      window.location.href = "https://abonnement.lesechos.fr/";
      return;
    }

    startFollow(async () => {
      const newFollowState = await toggleFollow(follow);
      setFollow(newFollowState);
    });
  }

  // TODO: Refactor to be more readable
  const label = follow
    ? "Se désincrire"
    : hasSubscription
      ? "S'inscrire"
      : "S'abonner";

  const intent = isLoading
    ? undefined
    : follow
      ? "unfollow"
      : hasSubscription
        ? "follow"
        : "subscribe";

  return (
    <Button onClick={handleFollow} intent={intent} isLoading={isLoading}>
      {label}
    </Button>
  );
}
