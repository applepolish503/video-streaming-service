import React from "react";
import { useParams, Link } from "react-router-dom";
import { demoLocations } from "../resources/locations";

export function LocationDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const location = demoLocations.find((l) => l.id === id) || null;
  return (
    <div className="page" style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>Location detail</h1>
        <Link to="/main" className="btn secondary">Back to main</Link>
      </div>
      {location ? (
        <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{location.alias} <span style={{ color: "var(--muted)", fontSize: 14 }}>({location.nameTh ?? location.name})</span></div>
          <div style={{ color: "var(--muted)" }}>ID: {location.id}</div>
          <div>Lat: {location.lat}, Lng: {location.lng}</div>
        </div>
      ) : (
        <div className="card" style={{ padding: 16 }}>Unknown location: {id}</div>
      )}
    </div>
  );
}


