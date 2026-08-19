import { defineConfig } from "vite"
import react from "@vitejs/react-refresh" // or your standard plugin

export default defineConfig({
  base: "/prenticemath-frontend/", // Must match your repo name exactly
  plugins: [react()],
})
