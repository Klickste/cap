import esbuild from 'esbuild'
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates'

await esbuild.build({
	entryPoints: ['src/cap.js'],
	outfile: 'dist/cap.min.js',
	plugins: [minifyTemplates(), writeFiles()],
	bundle: true,
	sourcemap: false,
	minify: true,
	write: false,
})
