import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
	namespace: 'cap',
	plugins: [sass()],
	globalStyle: 'src/global/global.scss',
	sourceMap: false,
	outputTargets: [
		{
			type: 'www',
			serviceWorker: null,
		},
		{
			type: 'docs-readme',
			footer: '©2023 cgoern',
		},
		{
			type: 'dist',
			esmLoaderPath: '../loader',
			copy: [{ src: 'cap.scss', dest: 'cap.scss' }],
		},
		{
			type: 'dist-custom-elements',
		},
	],
}
