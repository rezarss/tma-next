"use client";

import { useEffect, useState } from "react";
import TelegramScript from "./components/TelegramScript";
import { LogProvider, useLog } from "./components/logger";

function TelegramApp() {
  const [userData, setUserData] = useState(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const log = useLog();

  useEffect(() => {
    log("Component mounted, waiting for Telegram script to load...");
  }, []);

  useEffect(() => {
    if (isScriptLoaded) {
      log("Telegram script loaded, checking for WebApp...");
      if (typeof window !== "undefined" && window.Telegram?.WebApp) {
        log("Telegram WebApp is available");
        const tg = window.Telegram.WebApp;
        const user = tg.initDataUnsafe?.user;
        if (user) {
          log(`User data received: ${JSON.stringify(user)}`);
          setUserData(user);
        } else {
          log("No user data available");
        }
      } else {
        log("Telegram WebApp is not available");
      }
    }
  }, [isScriptLoaded]);

  return (
    <main>
      <h1>Telegram Mini App</h1>
      <TelegramScript onLoad={() => {
        setIsScriptLoaded(true);
        log("Telegram script onLoad callback fired");
      }} />
      {isScriptLoaded ? (
        userData ? (
          <div>
            <p>Your Telegram ID is: {userData.id}</p>
            <p>Name: {userData.first_name} {userData.last_name}</p>
            <p>Username: {userData.username}</p>
          </div>
        ) : (
          <p>No user data available. Are you running this in Telegram?</p>
        )
      ) : (
        <p>Loading Telegram script...</p>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <LogProvider>
      <TelegramApp />
    </LogProvider>
  );
}