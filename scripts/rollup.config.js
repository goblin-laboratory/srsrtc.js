// import resolve from '@rollup/plugin-node-resolve';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import { babel } from '@rollup/plugin-babel';
import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";

import pkg from "../package.json";

export default {
  input: "src/index.ts",
  output: [
    // {
    //   dir: "dist",
    //   format: "cjs",
    // },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), filesize()],
};
