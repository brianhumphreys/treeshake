// Library build configuration.
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: [
      'src/react.ts',
      'src/react/ReactCard.ts',
      'src/react/ReactDetailedCard.ts'
    ],
    output: {
      dir: 'build/react',
      format: 'esm',
    },
    external: ['react'],
    plugins: [typescript(), resolve()],
    treeshake: {
      moduleSideEffects: true,
    }
  },
  {
    input: [
      'src/lit.ts',
      'src/components/Card.ts',
      'src/components/DetailedCard.ts'
    ],
    output: {
      dir: 'build/lit',
      format: 'esm',
    },
    plugins: [typescript(), resolve()],
    treeshake: {
      moduleSideEffects: true,
    }
  },
  {
    input: [
      'src/lit.ts',
    ],
    output: {
      file: 'build/cjs/cjs.js',
      format: 'cjs',
      esModule: false,
    },
    plugins: [typescript(), resolve()],
  },
]
