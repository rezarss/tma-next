// app/page.js
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      const user = tg.initDataUnsafe?.user;
      if (user) {
        setUserData(user);
      }
    }
  }, []);

  return (
    <main>
      <h1>Telegram Mini App</h1>
      {userData ? (
        <div>
          <p>Your Telegram ID is: {userData.id}</p>
          <p>Name: {userData.first_name} {userData.last_name}</p>
          <p>Username: {userData.username}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </main>
  );
}