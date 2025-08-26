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
      <main style={{ display: "flex", width: "100%", height: "calc(100vh - 56px)" }}>
        <Outlet />
      </main>
      {/* footer removed to maximize viewport height for map */}
    </div>
  );
}


