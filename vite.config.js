// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from '@tailwindcss/vite'


// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:8080",
//         changeOrigin: true,
//         secure: false
//       }
//     }
//   }
// });


import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import JavaScriptObfuscator from "javascript-obfuscator"

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),

    mode === "production" && {
      name: "safe-obfuscator",
      enforce: "post",
      generateBundle(_, bundle) {
        for (const fileName in bundle) {
          const chunk = bundle[fileName]

          // ✅ ONLY obfuscate files you control
          if (
            chunk.type === "chunk" &&
            fileName.includes("secure")
          ) {
            const result = JavaScriptObfuscator.obfuscate(chunk.code, {
              compact: true,
              stringArray: true,
              stringArrayEncoding: ["base64"],
              stringArrayThreshold: 0.7
              // ❌ NO controlFlowFlattening
              // ❌ NO deadCodeInjection
              // ❌ NO selfDefending
            })

            chunk.code = result.getObfuscatedCode()
          }
        }
      }
    }
  ].filter(Boolean),

  build: {
    sourcemap: false
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
}))
