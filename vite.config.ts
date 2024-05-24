import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
	build: {
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			name: "test-library",
			fileName: "test-library",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime", '@emotion/react',
			'@emotion/styled'],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});