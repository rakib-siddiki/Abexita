import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app1",
      filename: "remoteEntry.js", // Expose the remoteEntry at this path
      exposes: {
        "./Button": "./src/shared/Button.tsx",
        "./Card": "./src/shared/Card.tsx",
        "./Icons": "./src/Icons/index.tsx",
        "./FeaturesSection": "./src/shared/FeaturesSection/FeaturesSection.tsx",
        "./TheHeader": "./src/shared/TheHeader/TheHeader.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
  },
});
