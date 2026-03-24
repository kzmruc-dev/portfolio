import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages にデプロイする場合は base をリポジトリ名に変更してください
// 例: リポジトリが https://github.com/yourname/portfolio なら "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
