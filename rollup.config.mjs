import { rollup, plugin, env, config } from '@brixtol/rollup-config';
import typescript from 'typescript';
import * as tslib from 'tslib';

export default rollup(
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        file: config.output.module,
        sourcemap: env.is('dev', 'inline'),
        preferConst: true
      },
      {
        format: 'cjs',
        file: config.output.main,
        sourcemap: env.is('dev', 'inline'),
        exports: 'auto'
      }
    ],
    external: [ 'crypto' ],
    plugins: env.if('dev')(
      [
        plugin.ts(
          {
            typescript,
            tslib,
            outputToFilesystem: false
          }
        )
      ]
    )(
      [
        plugin.terser({ compress: { passes: 2 } })
      ]
    )
  }
);
