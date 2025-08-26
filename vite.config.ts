import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pagesで `https://<user>.github.io/<repo>/` 配下に配置されるため
// `base` にリポジトリ名を設定します。後でコマンドで置換しやすいようにプレースホルダを使用。
const repoName = process.env.GH_PAGES_BASE || ""; // 例: "/video-streaming-service/"

export default defineConfig({
  plugins: [react()],
  base: repoName,
});


