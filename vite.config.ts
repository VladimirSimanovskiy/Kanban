import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({ include: ["src"], tsconfigPath: "./tsconfig.app.json", insertTypesEntry: true, rollupTypes: true })
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "uikit",
			formats: ["es", "umd"],
			fileName: (format) => `uikit.${format}.js`
		},
		rollupOptions: {
			external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react-dom/client": "ReactDOMClient",
					"react/jsx-runtime": "jsxRuntime"
				}
			}
		},
		minify: false
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	}
});
