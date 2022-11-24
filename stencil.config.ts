import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
	namespace: 'cap',
	taskQueue: 'async',
	plugins: [sass()],
	globalStyle: 'src/global/global.scss',
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
