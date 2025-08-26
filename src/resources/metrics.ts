export type SummaryMetrics = {
  title: string;
  data: { label: string; value: number; color: string }[];
  onTime: number; // 65-95
  errorPackages: number; // 5-15
  muda: { label: string; value: number; color: string }[];
};

export const globalSummary: SummaryMetrics = {
  title: "All locations",
  data: [
    { label: "稼働時間", value: 1200, color: "#7c7cff" },
    { label: "停止時間", value: 240, color: "#4f8cff" },
    { label: "待機時間", value: 600, color: "#a78bfa" }
  ],
  onTime: 88,
  errorPackages: 9,
  muda: [
    { label: "Value Added", value: 40, color: "#7c7cff" },
    { label: "Wait", value: 28, color: "#4f8cff" },
    { label: "Empty walk", value: 22, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]
};

export const perLocationSummary: Record<string, SummaryMetrics> = {
  "bangkok": { title: "Bangkok", data: [
    { label: "稼働時間", value: 320, color: "#7c7cff" },
    { label: "停止時間", value: 70, color: "#4f8cff" },
    { label: "待機時間", value: 160, color: "#a78bfa" }
  ], onTime: 92, errorPackages: 7, muda: [
    { label: "Value Added", value: 65, color: "#7c7cff" },
    { label: "Wait", value: 12, color: "#4f8cff" },
    { label: "Empty walk", value: 8, color: "#a78bfa" },
    { label: "Other", value: 15, color: "#94a3b8" }
  ]},
  "chiang-mai": { title: "Chiang Mai", data: [
    { label: "稼働時間", value: 180, color: "#7c7cff" },
    { label: "停止時間", value: 40, color: "#4f8cff" },
    { label: "待機時間", value: 120, color: "#a78bfa" }
  ], onTime: 80, errorPackages: 12, muda: [
    { label: "Value Added", value: 30, color: "#7c7cff" },
    { label: "Wait", value: 40, color: "#4f8cff" },
    { label: "Empty walk", value: 20, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "chiang-rai": { title: "Chiang Rai", data: [
    { label: "稼働時間", value: 120, color: "#7c7cff" },
    { label: "停止時間", value: 30, color: "#4f8cff" },
    { label: "待機時間", value: 80, color: "#a78bfa" }
  ], onTime: 70, errorPackages: 14, muda: [
    { label: "Value Added", value: 20, color: "#7c7cff" },
    { label: "Wait", value: 30, color: "#4f8cff" },
    { label: "Empty walk", value: 35, color: "#a78bfa" },
    { label: "Other", value: 15, color: "#94a3b8" }
  ]},
  "phuket": { title: "Phuket", data: [
    { label: "稼働時間", value: 160, color: "#7c7cff" },
    { label: "停止時間", value: 35, color: "#4f8cff" },
    { label: "待機時間", value: 90, color: "#a78bfa" }
  ], onTime: 88, errorPackages: 6, muda: [
    { label: "Value Added", value: 70, color: "#7c7cff" },
    { label: "Wait", value: 10, color: "#4f8cff" },
    { label: "Empty walk", value: 10, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "pattaya": { title: "Pattaya", data: [
    { label: "稼働時間", value: 150, color: "#7c7cff" },
    { label: "停止時間", value: 30, color: "#4f8cff" },
    { label: "待機時間", value: 80, color: "#a78bfa" }
  ], onTime: 84, errorPackages: 9, muda: [
    { label: "Value Added", value: 25, color: "#7c7cff" },
    { label: "Wait", value: 25, color: "#4f8cff" },
    { label: "Empty walk", value: 40, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "nakhon-ratchasima": { title: "Nakhon Ratchasima", data: [
    { label: "稼働時間", value: 140, color: "#7c7cff" },
    { label: "停止時間", value: 30, color: "#4f8cff" },
    { label: "待機時間", value: 90, color: "#a78bfa" }
  ], onTime: 76, errorPackages: 13, muda: [
    { label: "Value Added", value: 35, color: "#7c7cff" },
    { label: "Wait", value: 15, color: "#4f8cff" },
    { label: "Empty walk", value: 35, color: "#a78bfa" },
    { label: "Other", value: 15, color: "#94a3b8" }
  ]},
  "khon-kaen": { title: "Khon Kaen", data: [
    { label: "稼働時間", value: 130, color: "#7c7cff" },
    { label: "停止時間", value: 25, color: "#4f8cff" },
    { label: "待機時間", value: 70, color: "#a78bfa" }
  ], onTime: 75, errorPackages: 12, muda: [
    { label: "Value Added", value: 28, color: "#7c7cff" },
    { label: "Wait", value: 32, color: "#4f8cff" },
    { label: "Empty walk", value: 25, color: "#a78bfa" },
    { label: "Other", value: 15, color: "#94a3b8" }
  ]},
  "udon-thani": { title: "Udon Thani", data: [
    { label: "稼働時間", value: 120, color: "#7c7cff" },
    { label: "停止時間", value: 25, color: "#4f8cff" },
    { label: "待機時間", value: 60, color: "#a78bfa" }
  ], onTime: 73, errorPackages: 13, muda: [
    { label: "Value Added", value: 22, color: "#7c7cff" },
    { label: "Wait", value: 38, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "ubon-ratchathani": { title: "Ubon Ratchathani", data: [
    { label: "稼働時間", value: 110, color: "#7c7cff" },
    { label: "停止時間", value: 25, color: "#4f8cff" },
    { label: "待機時間", value: 60, color: "#a78bfa" }
  ], onTime: 72, errorPackages: 14, muda: [
    { label: "Value Added", value: 18, color: "#7c7cff" },
    { label: "Wait", value: 42, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "surat-thani": { title: "Surat Thani", data: [
    { label: "稼働時間", value: 100, color: "#7c7cff" },
    { label: "停止時間", value: 20, color: "#4f8cff" },
    { label: "待機時間", value: 55, color: "#a78bfa" }
  ], onTime: 68, errorPackages: 15, muda: [
    { label: "Value Added", value: 15, color: "#7c7cff" },
    { label: "Wait", value: 45, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "hat-yai": { title: "Hat Yai", data: [
    { label: "稼働時間", value: 115, color: "#7c7cff" },
    { label: "停止時間", value: 22, color: "#4f8cff" },
    { label: "待機時間", value: 58, color: "#a78bfa" }
  ], onTime: 74, errorPackages: 13, muda: [
    { label: "Value Added", value: 26, color: "#7c7cff" },
    { label: "Wait", value: 34, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "nakhon-si-thammarat": { title: "Nakhon Si Thammarat", data: [
    { label: "稼働時間", value: 105, color: "#7c7cff" },
    { label: "停止時間", value: 20, color: "#4f8cff" },
    { label: "待機時間", value: 50, color: "#a78bfa" }
  ], onTime: 72, errorPackages: 14, muda: [
    { label: "Value Added", value: 24, color: "#7c7cff" },
    { label: "Wait", value: 36, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "ayutthaya": { title: "Ayutthaya", data: [
    { label: "稼働時間", value: 125, color: "#7c7cff" },
    { label: "停止時間", value: 24, color: "#4f8cff" },
    { label: "待機時間", value: 66, color: "#a78bfa" }
  ], onTime: 86, errorPackages: 9, muda: [
    { label: "Value Added", value: 60, color: "#7c7cff" },
    { label: "Wait", value: 14, color: "#4f8cff" },
    { label: "Empty walk", value: 11, color: "#a78bfa" },
    { label: "Other", value: 15, color: "#94a3b8" }
  ]},
  "hua-hin": { title: "Hua Hin", data: [
    { label: "稼働時間", value: 95, color: "#7c7cff" },
    { label: "停止時間", value: 18, color: "#4f8cff" },
    { label: "待機時間", value: 45, color: "#a78bfa" }
  ], onTime: 69, errorPackages: 15, muda: [
    { label: "Value Added", value: 18, color: "#7c7cff" },
    { label: "Wait", value: 42, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]},
  "sukhothai": { title: "Sukhothai", data: [
    { label: "稼働時間", value: 90, color: "#7c7cff" },
    { label: "停止時間", value: 18, color: "#4f8cff" },
    { label: "待機時間", value: 40, color: "#a78bfa" }
  ], onTime: 66, errorPackages: 15, muda: [
    { label: "Value Added", value: 12, color: "#7c7cff" },
    { label: "Wait", value: 48, color: "#4f8cff" },
    { label: "Empty walk", value: 30, color: "#a78bfa" },
    { label: "Other", value: 10, color: "#94a3b8" }
  ]}
};


