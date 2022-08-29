// Library build configuration.
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    // Specify entries of library, so that Rollup
    // can figure out their inter-dependencies.
    // input: ['src/index.ts', 'src/react/Card.ts', 'src/react/DetailedCard.ts'],
    input: [
      'src/react.ts',
      'src/react/ReactCard.ts',
      'src/react/ReactDetailedCard.ts'
    ],
    output: {
      // Bundle into ESM for modern consumers.
      // Only ESM build can currently be tree-shaken.
      dir: 'build/esm',
      format: 'esm',
    },
  // output: [
  //   {
  //     // Bundle into ESM for modern consumers.
  //     // Only ESM build can currently be tree-shaken.
  //     dir: 'build/esm',
  //     format: 'esm',
  //   },
  //   {
  //     // Bundle into CJS for other consumers.
  //     dir: 'build/cjs',
  //     format: 'cjs',
  //     esModule: false,
  //   },
  // ],
  external: ['react'],
  plugins: [typescript(), resolve()],
  treeshake: {
    moduleSideEffects: true,
  }
  },
  {
    // Specify entries of library, so that Rollup
    // can figure out their inter-dependencies.
    // input: ['src/index.ts', 'src/react/Card.ts', 'src/react/DetailedCard.ts'],
    input: [
      'src/cjs.ts',
    ],
    output: {
        // Bundle into CJS for other consumers.
        dir: 'build/cjs',
        format: 'cjs',
      },
    plugins: [typescript(), resolve()],
    // treeshake: {
    //   moduleSideEffects: true,
    // }
  },
]
