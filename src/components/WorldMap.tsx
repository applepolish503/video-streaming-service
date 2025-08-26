import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
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
  const AnyMarker = Marker as unknown as React.ComponentType<any>;
  const smallIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [15, 25],
    iconAnchor: [7, 24],
    popupAnchor: [1, -20],
    shadowSize: [25, 25]
  });
  return (
    <div className="card" style={{ overflow: "hidden", height, background: "#0b1020" }}>
      <AnyMap
        center={[15.5, 101.0] as [number, number]}
        zoom={5}
        minZoom={2}
        maxZoom={18}
        style={{ height: "100%", width: "100%" }}
        worldCopyJump={false}
        wheelPxPerZoomLevel={80}
        maxBounds={[[5, 95], [21, 106]]}
        maxBoundsViscosity={0.8}
      >
        <AnyTile
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          noWrap
        />
        {locations.map((loc) => (
          <AnyMarker key={loc.id} position={[loc.lat, loc.lng] as [number, number]} icon={smallIcon} eventHandlers={{ click: () => onSelect?.(loc.id) }}>
            <Popup>
              <div style={{ display: "grid", gap: 4 }}>
                <strong>{loc.name}</strong>
                <span style={{ color: "#9aa3b2" }}>{loc.alias}</span>
              </div>
            </Popup>
          </AnyMarker>
        ))}
      </AnyMap>
    </div>
  );
}


