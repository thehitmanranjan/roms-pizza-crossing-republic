"use client";

import { useState, useEffect } from "react";
import { SubscriptionPopup } from "./SubscriptionPopup";

export function SubscriptionPopupWrapper() {
  const [showSubscription, setShowSubscription] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setShowSubscription(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <SubscriptionPopup open={showSubscription} onOpenChange={setShowSubscription} />;
}
