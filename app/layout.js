// app/layout.tsx
import React from 'react';
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
