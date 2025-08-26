import React, { useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { demoLocations } from "../resources/locations";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { locationCameras } from "../resources/cameras";

export function LocationDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const location = demoLocations.find((l) => l.id === id) || null;
  const cameras = useMemo(() => (id ? locationCameras[id] || [] : []), [id]);
  const [activeCam, setActiveCam] = useState<string | null>(cameras[0]?.id ?? null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const base = import.meta.env.BASE_URL || "/";
  const videoSrc = activeCam ? `${base}videos/${encodeURIComponent(id || "")}/${encodeURIComponent(activeCam)}.mp4` : undefined;
  const smallIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [15, 25],
    iconAnchor: [7, 24],
    popupAnchor: [1, -20],
    shadowSize: [25, 25]
  });

  function handleSwitchCamera(camId: string): void {
    if (videoRef.current) {
      try { setCurrentTime(videoRef.current.currentTime || 0); } catch {}
    }
    setActiveCam(camId);
    // 再生位置は <video> の onLoadedMetadata で復元
  }

  return (
    <div style={{ height: "calc(100vh - 56px)", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, padding: 16 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ margin: 0, fontSize: 20 }}>{location ? location.alias : "Unknown"}</h1>
          <Link to="/main" className="btn secondary">Back</Link>
        </div>

        <div className="card" style={{ overflow: "hidden", height: 400 }}>
          {location && (
            <MapContainer
              center={[location.lat, location.lng] as [number, number]}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
              {cameras.map((c) => (
                <Marker key={c.id} position={[c.lat, c.lng] as [number, number]} icon={smallIcon} eventHandlers={{ click: () => handleSwitchCamera(c.id) }}>
                  <Popup>
                    <div style={{ display: "grid", gap: 4 }}>
                      <strong>{c.name}</strong>
                      <button className="btn" onClick={() => handleSwitchCamera(c.id)}>View</button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>

      <div style={{ display: "grid", gap: 12, alignContent: "start" }}>
        <div className="card" style={{ padding: 12 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Camera</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cameras.map((c) => (
              <button key={c.id} className="btn secondary" onClick={() => handleSwitchCamera(c.id)} disabled={c.id === activeCam}>{c.name}</button>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: 12 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Playback</div>
          {videoSrc ? (
            <video
              ref={videoRef}
              key={videoSrc}
              src={videoSrc}
              controls
              style={{ width: "100%", background: "#000" }}
              onLoadedMetadata={() => {
                if (videoRef.current) {
                  try { videoRef.current.currentTime = currentTime; } catch {}
                }
              }}
            />
          ) : (
            <div style={{ color: "var(--muted)" }}>Select a camera on the map.</div>
          )}
        </div>

        <div className="card" style={{ padding: 12, height: 120 }}>
          <div style={{ fontWeight: 700 }}>Calendar (placeholder)</div>
        </div>
        <div className="card" style={{ padding: 12, height: 160 }}>
          <div style={{ fontWeight: 700 }}>Daily KPIs (placeholder)</div>
        </div>
      </div>
    </div>
  );
}


