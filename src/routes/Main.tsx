import React, { useState } from "react";
import { WorldMap } from "../components/WorldMap";
import { demoLocations } from "../resources/locations";

export function Main(): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = demoLocations.find((l) => l.id === selectedId) || null;
  return (
    <div className="page" style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: 24, margin: 0 }}>メイン</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn secondary">拠点登録</button>
          <button className="btn">比較</button>
        </div>
      </div>

      <WorldMap locations={demoLocations} onSelect={setSelectedId} />

      <div className="card" style={{ padding: 16 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>選択した拠点</div>
        {selected ? (
          <div>{selected.name} ({selected.alias})</div>
        ) : (
          <div style={{ color: "var(--muted)" }}>ピンをクリックしてください</div>
        )}
      </div>
    </div>
  );
}


