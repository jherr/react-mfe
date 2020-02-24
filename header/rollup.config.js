import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace';
import externalGlobals from "rollup-plugin-external-globals";
import serve from 'rollup-plugin-serve';

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
  input: "src/index.js",
  output: {
    file: 'dist/header.js',
    format: 'esm'
   },
   plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    externalGlobals({
      react: "window.React"
    }),
    resolve(),
    (NODE_ENV !== 'production' && serve({
      contentBase: 'dist',
      port: 2000,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })),
  ]
};