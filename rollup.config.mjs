// eslint-disable-next-line import/no-extraneous-dependencies
import typescript from '@rollup/plugin-typescript';
// eslint-disable-next-line import/no-extraneous-dependencies
import dts from 'rollup-plugin-dts';


export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: './es',
        format: 'es',
        entryFileNames: '[name].mjs',
      },
      {
        dir: './lib',
        format: 'cjs',
      },
    ],
    plugins: [typescript({ exclude: ['test'] })],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/fetchEventSource.js',
        format: 'umd',
        exports: 'named',
        name: 'FetchEventSource',
      },
    ],
    plugins: [typescript({ exclude: ['test'], compilerOptions: { target: 'es6' } })],
  },
  {
    input: './src/index.ts',
    output: {
      file: './typings/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
