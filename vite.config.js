import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "GitEstudos",
      fileName: () => `git-estudos.js`,

      formats: ['umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: "git-estudos.[ext]",
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': true,
  },
});
