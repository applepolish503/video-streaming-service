import React, { useState } from "react";
import { WorldMap } from "../components/WorldMap";
import { demoLocations } from "../resources/locations";
import { PieChart } from "../components/PieChart";
import { KpiCard } from "../components/KpiCard";
import { globalSummary, perLocationSummary } from "../resources/metrics";

export function Main(): JSX.Element {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = demoLocations.find((l) => l.id === selectedId) || null;
  const summary = selected ? perLocationSummary[selected.id] : globalSummary;
  return (
    <div style={{ height: "100%", width: "100%", display: "grid", gridTemplateColumns: "4fr 1fr", gap: 0, alignItems: "stretch" }}>
      <section style={{ height: "100%" }}>
        <WorldMap locations={demoLocations} onSelect={setSelectedId} height="100%" />
      </section>

      <section className="card" style={{ height: "100%", display: "grid", gridTemplateRows: "auto auto auto 1fr", padding: 16, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>サマリ</h2>
          <span style={{ color: "var(--muted)", fontSize: 12 }}>
            {selected ? `${selected.name}` : "全拠点"}
          </span>
        </div>
        <KpiCard title="On time KPI" value={summary.onTime} />
        <KpiCard title="Error packages" value={summary.errorPackages} />
        <PieChart data={summary.muda} centerLabel="Muda" />
      </section>
    </div>
  );
}


