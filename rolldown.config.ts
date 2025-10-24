import { defineConfig } from "rolldown";
import { dts } from "rolldown-plugin-dts";

export default defineConfig({
	plugins: [
		dts({
			oxc: true,
		}),
	],
	input: "src/index.ts",
	output: {
		dir: "dist",
		format: "esm",
		sourcemap: true,
		minify: {
			mangle: true,
			compress: true,
			removeWhitespace: true,
		},
	},
});
