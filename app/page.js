'use client'

import React, { useEffect, useState } from 'react';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // اطمینان از اینکه اسکریپت Telegram WebApp لود شده است
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // فعال کردن Mini App 
      tg.ready();

      // دریافت ID کاربر
      const user = tg.initDataUnsafe?.user;
      if (user) {
        setUserId(user.id);
      }
    }
  }, []);

  return (
    <div className="App">
      <h1>Telegram Mini App</h1>
      {userId ? (
        <p>Your Telegram ID is: {userId}</p>
      ) : (
        <p>Loading user ID...</p>
      )}
    </div>
  );
}

export default App;
