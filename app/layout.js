"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function TelegramScript({ onLoad }) {
  const handleLoad = () => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      onLoad(true);
    }
  };

  return (
    <Script
      src="https://telegram.org/js/telegram-web-app.js"
      strategy="afterInteractive"
      onLoad={handleLoad}
    />
  );
}