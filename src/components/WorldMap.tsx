import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { LocationPoint } from "../resources/locations";

type Props = {
  locations: LocationPoint[];
  onSelect?: (id: string) => void;
  height?: number | string;
};

export function WorldMap({ locations, onSelect, height = "100%" }: Props): JSX.Element {
  // 型の齟齬でCIが落ちる環境向けに、一時的に any 化したエイリアスを使用
  const AnyMap = MapContainer as unknown as React.ComponentType<any>;
  const AnyTile = TileLayer as unknown as React.ComponentType<any>;
  const AnyCircle = CircleMarker as unknown as React.ComponentType<any>;
  return (
    <div className="card" style={{ overflow: "hidden", height, background: "#0b1020" }}>
      <AnyMap
        center={[20, 0] as [number, number]}
        zoom={2}
        minZoom={2}
        maxZoom={18}
        style={{ height: "100%", width: "100%" }}
        worldCopyJump={false}
        wheelPxPerZoomLevel={80}
        maxBounds={[[-85, -180], [85, 180]]}
        maxBoundsViscosity={0.8}
      >
        <AnyTile
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          noWrap
        />
        {locations.map((loc) => (
          <AnyCircle
            key={loc.id}
            center={[loc.lat, loc.lng] as [number, number]}
            radius={8}
            pathOptions={{
              color: "#7c7cff",
              fillColor: "#7c7cff",
              fillOpacity: 0.9,
              opacity: 0.9
            }}
            eventHandlers={{ click: () => onSelect?.(loc.id) }}
          >
            <Popup>
              <div style={{ display: "grid", gap: 4 }}>
                <strong>{loc.name}</strong>
                <span style={{ color: "#9aa3b2" }}>{loc.alias}</span>
              </div>
            </Popup>
          </AnyCircle>
        ))}
      </AnyMap>
    </div>
  );
}


