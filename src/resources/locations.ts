export type LocationPoint = {
  id: string;
  name: string;
  alias?: string;
  lat: number;
  lng: number;
};

export const demoLocations: LocationPoint[] = [
  { id: "tokyo", name: "東京拠点", alias: "Tokyo", lat: 35.6804, lng: 139.7690 },
  { id: "osaka", name: "大阪拠点", alias: "Osaka", lat: 34.6937, lng: 135.5023 },
  { id: "la", name: "Los Angeles", alias: "LA", lat: 34.0522, lng: -118.2437 },
  { id: "london", name: "London", alias: "LDN", lat: 51.5072, lng: -0.1276 },
];


