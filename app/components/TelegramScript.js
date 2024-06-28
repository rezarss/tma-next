"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function TelegramScript() {
  useEffect(() => {
    // اطمینان از اینکه کد فقط در مرورگر اجرا می‌شود
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <Script
      src="https://telegram.org/js/telegram-web-app.js"
      strategy="afterInteractive"
    />
  );
}