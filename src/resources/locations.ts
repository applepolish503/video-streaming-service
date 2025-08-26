export type LocationPoint = {
  id: string;
  name: string;
  alias?: string;
  lat: number;
  lng: number;
};

export const demoLocations: LocationPoint[] = [
  { id: "bangkok", name: "バンコク", alias: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { id: "chiang-mai", name: "チェンマイ", alias: "Chiang Mai", lat: 18.7883, lng: 98.9853 },
  { id: "chiang-rai", name: "チェンライ", alias: "Chiang Rai", lat: 19.9072, lng: 99.8309 },
  { id: "phuket", name: "プーケット", alias: "Phuket", lat: 7.8804, lng: 98.3923 },
  { id: "pattaya", name: "パタヤ（チョンブリ）", alias: "Pattaya", lat: 12.9236, lng: 100.8825 },
  { id: "nakhon-ratchasima", name: "ナコンラチャシマ（コラート）", alias: "Nakhon Ratchasima", lat: 14.9799, lng: 102.0977 },
  { id: "khon-kaen", name: "コンケーン", alias: "Khon Kaen", lat: 16.4419, lng: 102.8350 },
  { id: "udon-thani", name: "ウドンタニー", alias: "Udon Thani", lat: 17.4138, lng: 102.7870 },
  { id: "ubon-ratchathani", name: "ウボンラーチャターニー", alias: "Ubon Ratchathani", lat: 15.2447, lng: 104.8470 },
  { id: "surat-thani", name: "スラートターニー", alias: "Surat Thani", lat: 9.1382, lng: 99.3215 },
  { id: "hat-yai", name: "ハジャイ（ソンクラー）", alias: "Hat Yai", lat: 7.0083, lng: 100.4767 },
  { id: "nakhon-si-thammarat", name: "ナコンシータンマラート", alias: "Nakhon Si Thammarat", lat: 8.4304, lng: 99.9631 },
  { id: "ayutthaya", name: "アユタヤ", alias: "Ayutthaya", lat: 14.3530, lng: 100.5680 },
  { id: "hua-hin", name: "ホアヒン", alias: "Hua Hin", lat: 12.5684, lng: 99.9577 },
  { id: "sukhothai", name: "スコータイ", alias: "Sukhothai", lat: 17.0154, lng: 99.8200 },
];


