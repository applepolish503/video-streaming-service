import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@example.com");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    navigate("/main");
  }

  return (
    <div style={{ width: "100%", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 320 }}>
        <h1 style={{ textAlign: "center", fontSize: 20, margin: "24px 0" }}>Sign in to Video Streaming Service</h1>

        <div className="card" style={{ padding: 16 }}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 12 }}>Email address</span>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <button type="submit" className="btn">Sign in</button>
          </form>
        </div>

        <p style={{ color: "var(--muted)", fontSize: 12, textAlign: "center", marginTop: 12 }}>
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}


