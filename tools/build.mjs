import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['cap.js'],
  bundle: true,
  outfile: 'dist/cap.js',
  target: 'es2015',
  format: 'esm',
  minify: true,
  minifySyntax: true,
}).catch(() => process.exit(1));
