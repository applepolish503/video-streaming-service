export type SummaryMetrics = {
  title: string;
  data: { label: string; value: number; color: string }[];
};

export const globalSummary: SummaryMetrics = {
  title: "All locations",
  data: [
    { label: "稼働時間", value: 1200, color: "#7c7cff" },
    { label: "停止時間", value: 240, color: "#4f8cff" },
    { label: "待機時間", value: 600, color: "#a78bfa" }
  ]
};

export const perLocationSummary: Record<string, SummaryMetrics> = {
  tokyo: {
    title: "Tokyo",
    data: [
      { label: "稼働時間", value: 420, color: "#7c7cff" },
      { label: "停止時間", value: 80, color: "#4f8cff" },
      { label: "待機時間", value: 210, color: "#a78bfa" }
    ]
  },
  osaka: {
    title: "Osaka",
    data: [
      { label: "稼働時間", value: 300, color: "#7c7cff" },
      { label: "停止時間", value: 60, color: "#4f8cff" },
      { label: "待機時間", value: 180, color: "#a78bfa" }
    ]
  },
  la: {
    title: "Los Angeles",
    data: [
      { label: "稼働時間", value: 250, color: "#7c7cff" },
      { label: "停止時間", value: 50, color: "#4f8cff" },
      { label: "待機時間", value: 140, color: "#a78bfa" }
    ]
  },
  london: {
    title: "London",
    data: [
      { label: "稼働時間", value: 230, color: "#7c7cff" },
      { label: "停止時間", value: 50, color: "#4f8cff" },
      { label: "待機時間", value: 120, color: "#a78bfa" }
    ]
  }
};


