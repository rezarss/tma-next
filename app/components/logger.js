"use client";

import React, { useState, useCallback } from 'react';

export const LogContext = React.createContext(null);

export function LogProvider({ children }) {
  const [logs, setLogs] = useState([]);

  const addLog = useCallback((message) => {
    setLogs(prevLogs => [...prevLogs, { id: Date.now(), message }]);
  }, []);

  return (
    <LogContext.Provider value={addLog}>
      {children}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Debug Logs:</h3>
        {logs.map(log => (
          <p key={log.id}>{log.message}</p>
        ))}
      </div>
    </LogContext.Provider>
  );
}

export function useLog() {
  return React.useContext(LogContext);
}