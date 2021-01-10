import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/working.js",
    plugins: [
      resolve({ browser: false }),
      commonjs({ transformMixedEsModules: true }),
    ],
    output: {
      file: "out/working.js",
      format: "cjs",
    },
  },
  {
    input: "src/broken.js",
    plugins: [
      resolve({ browser: false }),
      commonjs({ transformMixedEsModules: true }),
    ],
    output: {
      file: "out/broken.js",
      format: "cjs",
    },
  },
];
