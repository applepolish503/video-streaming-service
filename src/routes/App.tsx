import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export function App(): JSX.Element {
  const location = useLocation();
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ fontWeight: 700 }}>Video Streaming Service</div>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Login</Link>
          <Link to="/main">Main</Link>
        </nav>
      </header>
      <main style={{ flex: 1, display: "flex" }}>
        <div style={{ margin: "0 auto", width: "100%", maxWidth: 1120, padding: 24 }}>
          <Outlet />
        </div>
      </main>
      <footer className="card" style={{ padding: 16, fontSize: 12 }}>Path: {location.pathname}</footer>
    </div>
  );
}


