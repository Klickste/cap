import { Config } from '@stencil/core'

export const config: Config = {
	namespace: 'cap',
	taskQueue: 'async',
	globalStyle: 'src/global/global.css',
	globalScript: 'src/global/global.ts',
	outputTargets: [
		{
			type: 'www',
			serviceWorker: null,
		},
		{
			type: 'docs-readme',
			footer: '',
		},
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'dist-custom-elements',
		},
	],
}
