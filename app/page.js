"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      setUserId(webApp.initDataUnsafe?.user?.id);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      <h1 className="text-4xl font-bold mb-8">Telegram Mini App</h1>
      {userId ? (
        <p className="text-xl">شناسه کاربر شما: {userId}</p>
      ) : (
        <p className="text-xl">Loading</p>
      )}
    </main>
  );
}
