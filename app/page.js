import { useEffect, useState } from 'react';

export default function HomePage() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // بررسی اینکه آیا window.Telegram موجود است
    if (typeof window !== 'undefined' && window.Telegram) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      setUserId(user ? user.id.toString() : null);
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      {userId ? <p>User ID: {userId}</p> : <p>Loading...</p>}
    </div>
  );
}
