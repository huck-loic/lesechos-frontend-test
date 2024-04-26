"use client";

import { useState } from "react";
import Button from "../Button";

type NewsletterButtonProps = {
  hasSubscription: boolean;
};

export default function NewsletterButton({
  hasSubscription,
}: NewsletterButtonProps) {
  const [follow, setFollow] = useState(false);

  function handleFollow() {
    if (!hasSubscription) {
      return;
    }

    setFollow(!follow);
  }

  return (
    <Button
      onClick={handleFollow}
      intent={hasSubscription ? "follow" : "subscribe"}>
      {hasSubscription ? "S'inscrire" : "S'abonner"}
    </Button>
  );
}
