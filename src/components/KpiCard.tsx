import React from "react";

type Props = {
  title: string;
  value: number; // percent 0-100
};

export function KpiCard({ title, value }: Props): JSX.Element {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
      <div style={{ color: "var(--muted)", fontSize: 12 }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{clamped}%</div>
      <div style={{ height: 8, background: "var(--surface-2)" }}>
        <div style={{ width: `${clamped}%`, height: "100%", background: "var(--primary)" }} />
      </div>
    </div>
  );
}


