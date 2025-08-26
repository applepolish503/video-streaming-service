import React from "react";

export type PieDatum = { label: string; value: number; color: string };

type Props = {
  data: PieDatum[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
};

export function PieChart({ data, size = 220, thickness = 22, centerLabel }: Props): JSX.Element {
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0));
  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;
  const arcs = data.map((d, i) => {
    const fraction = d.value / total;
    const length = circumference * fraction;
    const dasharray = `${length} ${circumference - length}`;
    const dashoffset = -offset;
    offset += length;
    return (
      <circle
        key={i}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        stroke={d.color}
        strokeWidth={thickness}
        strokeDasharray={dasharray}
        strokeDashoffset={dashoffset}
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
      />
    );
  });

  return (
    <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{arcs}</svg>
      {centerLabel ? (
        <div style={{ marginTop: -size, height: 0, display: "grid", placeItems: "center", pointerEvents: "none" }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{centerLabel}</div>
        </div>
      ) : null}
      <div style={{ display: "grid", gap: 6 }}>
        {data.map((d) => (
          <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: d.color, display: "inline-block" }} />
            <span style={{ color: "var(--muted)" }}>{d.label}</span>
            <span style={{ marginLeft: "auto" }}>{d.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


