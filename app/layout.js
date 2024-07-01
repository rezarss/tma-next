// app/layout.tsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
