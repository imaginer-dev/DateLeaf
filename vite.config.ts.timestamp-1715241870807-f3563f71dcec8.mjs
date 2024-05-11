// vite.config.ts
import { defineConfig } from "file:///C:/Users/difbf/DateLeaf/node_modules/.pnpm/vitest@1.5.2_@types+node@20.12.7_jsdom@24.0.0_terser@5.30.4/node_modules/vitest/dist/config.js";
import react from "file:///C:/Users/difbf/DateLeaf/node_modules/.pnpm/@vitejs+plugin-react-swc@3.6.0_vite@5.2.10_@types+node@20.12.7_terser@5.30.4_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { VitePWA } from "file:///C:/Users/difbf/DateLeaf/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.2.10_@types+node@20.12.7_terser@5.30.4__workbox-build@7.1.0_@ty_2h6ab4jsmzuloqccx4qgq4jgne/node_modules/vite-plugin-pwa/dist/index.js";
import tsConfigPaths from "file:///C:/Users/difbf/DateLeaf/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.10_@types+node@20.12.7_terser@5.30.4_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    globals: true
  },
  plugins: [react(), VitePWA({ registerType: "autoUpdate" }), tsConfigPaths()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkaWZiZlxcXFxEYXRlTGVhZlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZGlmYmZcXFxcRGF0ZUxlYWZcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2RpZmJmL0RhdGVMZWFmL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiAnLi9zcmMvdGVzdHMvc2V0dXAudHMnLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBWaXRlUFdBKHsgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScgfSksIHRzQ29uZmlnUGF0aHMoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1AsU0FBUyxvQkFBb0I7QUFDNVIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQUUsY0FBYyxhQUFhLENBQUMsR0FBRyxjQUFjLENBQUM7QUFDN0UsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
