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
    <div className="page" style={{ display: "grid", gap: 16 }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>ログイン</h1>
      <p style={{ color: "var(--muted)", marginTop: 0 }}>メールアドレスを入力してログインしてください。</p>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <label style={{ display: "grid", gap: 8 }}>
          <span style={{ fontWeight: 600 }}>メールアドレス</span>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
          />
        </label>
        <button type="submit" className="btn">
          ログイン
        </button>
      </form>
    </div>
  );
}


