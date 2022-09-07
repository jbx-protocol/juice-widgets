import { terser } from "rollup-plugin-terser";

export default {
  input: "dist/pay.js",
  output: [
    {
      file: "dist/pay.js",
      format: "iife",
    },
    {
      file: "dist/pay.min.js",
      format: "iife",
      plugins: [terser()],
    },
    {
      file: "../../public/dist/pay.js",
      format: "iife",
    },
    {
      file: "../../public/dist/pay.min.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
};
