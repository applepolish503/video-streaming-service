export type CameraInfo = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  // 動画パスは `public/videos/<locationId>/<cameraId>.mp4` を想定
};

export const locationCameras: Record<string, CameraInfo[]> = {
  bangkok: [
    { id: "camera1", name: "Camera 1", lat: 13.7568, lng: 100.5030 },
    { id: "camera2", name: "Camera 2", lat: 13.7555, lng: 100.5020 },
    { id: "camera3", name: "Camera 3", lat: 13.7572, lng: 100.5012 }
  ],
  phuket: [
    { id: "camera1", name: "Camera 1", lat: 13.7568, lng: 100.5030 },
    { id: "camera2", name: "Camera 2", lat: 13.7555, lng: 100.5020 },
    { id: "camera3", name: "Camera 3", lat: 13.7572, lng: 100.5012 }
  ]
  // 他の拠点は必要に応じて追記
};


