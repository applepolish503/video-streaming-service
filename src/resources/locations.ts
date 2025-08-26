export type LocationPoint = {
  id: string;
  name: string;
  alias?: string;
  lat: number;
  lng: number;
  nameTh?: string;
};

export const demoLocations: LocationPoint[] = [
  { id: "bangkok", name: "Bangkok", nameTh: "กรุงเทพมหานคร", alias: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { id: "chiang-mai", name: "Chiang Mai", nameTh: "เชียงใหม่", alias: "Chiang Mai", lat: 18.7883, lng: 98.9853 },
  { id: "chiang-rai", name: "Chiang Rai", nameTh: "เชียงราย", alias: "Chiang Rai", lat: 19.9072, lng: 99.8309 },
  { id: "phuket", name: "Phuket", nameTh: "ภูเก็ต", alias: "Phuket", lat: 7.8804, lng: 98.3923 },
  { id: "pattaya", name: "Pattaya", nameTh: "พัทยา", alias: "Pattaya", lat: 12.9236, lng: 100.8825 },
  { id: "nakhon-ratchasima", name: "Nakhon Ratchasima", nameTh: "นครราชสีมา", alias: "Nakhon Ratchasima", lat: 14.9799, lng: 102.0977 },
  { id: "khon-kaen", name: "Khon Kaen", nameTh: "ขอนแก่น", alias: "Khon Kaen", lat: 16.4419, lng: 102.8350 },
  { id: "udon-thani", name: "Udon Thani", nameTh: "อุดรธานี", alias: "Udon Thani", lat: 17.4138, lng: 102.7870 },
  { id: "ubon-ratchathani", name: "Ubon Ratchathani", nameTh: "อุบลราชธานี", alias: "Ubon Ratchathani", lat: 15.2447, lng: 104.8470 },
  { id: "surat-thani", name: "Surat Thani", nameTh: "สุราษฎร์ธานี", alias: "Surat Thani", lat: 9.1382, lng: 99.3215 },
  { id: "hat-yai", name: "Hat Yai", nameTh: "หาดใหญ่", alias: "Hat Yai", lat: 7.0083, lng: 100.4767 },
  { id: "nakhon-si-thammarat", name: "Nakhon Si Thammarat", nameTh: "นครศรีธรรมราช", alias: "Nakhon Si Thammarat", lat: 8.4304, lng: 99.9631 },
  { id: "ayutthaya", name: "Ayutthaya", nameTh: "พระนครศรีอยุธยา", alias: "Ayutthaya", lat: 14.3530, lng: 100.5680 },
  { id: "hua-hin", name: "Hua Hin", nameTh: "หัวหิน", alias: "Hua Hin", lat: 12.5684, lng: 99.9577 },
  { id: "sukhothai", name: "Sukhothai", nameTh: "สุโขทัย", alias: "Sukhothai", lat: 17.0154, lng: 99.8200 },
];


