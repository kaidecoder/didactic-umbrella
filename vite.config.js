import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/prenticemath-frontend/",
  plugins: [react()],
})
