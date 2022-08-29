// Library build configuration.
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  // Specify entries of your library, so that Rollup
  // can figure out their inter-dependencies.
  input: ['src/index.ts', 'src/a.ts', 'src/b.ts'],
  output: [
    {
      // Bundle into ESM for modern consumers.
      // Only ESM build can currently be tree-shaken.
      dir: 'build/esm',
      format: 'esm',
    },
    {
      // Bundle into CJS for other consumers.
      dir: 'build/cjs',
      format: 'cjs',
    },
  ],
  plugins: [resolve(), typescript()],
}
