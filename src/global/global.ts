import { CapTextFamily } from './../types'

export default async () => {
	const body: HTMLBodyElement = document.querySelector('body')
	const head: HTMLHeadElement = document.querySelector('head')
	const style: CSSStyleDeclaration = getComputedStyle(body)

	const levelsDownProperty: string = style.getPropertyValue('--cap-text-levels-down')
	const levelsUpProperty: string = style.getPropertyValue('--cap-text-levels-up')
	const levelsBaseProperty: string = style.getPropertyValue('--cap-text-levels-base')
	const levelsRatioProperty: string = style.getPropertyValue('--cap-text-levels-ratio')

	const levelsDown: number = levelsDownProperty !== '' ? parseInt(levelsDownProperty) : -2
	const levelsUp: number = levelsUpProperty !== '' ? parseInt(levelsUpProperty) : 6
	const levelsBase: number = levelsBaseProperty !== '' ? parseInt(levelsBaseProperty) : 14
	const levelsRatio: number = levelsRatioProperty !== '' ? parseFloat(levelsRatioProperty) : 1.2

	const families: CapTextFamily[] = ['sans', 'serif', 'mono']

	let styles: string = ''
	let stylesheet: HTMLStyleElement = document.createElement('style')
	let metrics: {
		family: CapTextFamily
		upm: number
		capHeight: number
	}[] = []
	let scales: {
		name: string
		fontSize: number
		lineHeight: number
		letterSpacing: number
		leadingTrims: { family: CapTextFamily; value: number }[]
	}[] = []

	/**
	 * Gets the font size
	 * @param   {number}          level - The level
	 * @returns {Promise<number>}       - The font size
	 */
	const getFontSize = (level: number): number => {
		return Math.round(levelsBase * Math.pow(levelsRatio, level))
	}

	/**
	 * Gets the line height
	 * @param   {number}          fontSize - The font size
	 * @returns {Promise<number>}          - The line height
	 */
	const getLineHeight = (fontSize: number): number => {
		const ratio = 1.2 + 1.8 * Math.pow(Math.E, -0.12 * fontSize)

		return Math.round((fontSize * ratio) / 2) * 2
	}

	/**
	 * Gets the letter spacing
	 * @param   {number}          fontSize - The font size
	 * @returns {Promise<number>}          - The letter spacing
	 */
	const getLetterSpacing = (fontSize: number): number => {
		const ratio = -0.0223 + 0.185 * Math.pow(Math.E, -0.1745 * fontSize)

		return Math.round(ratio * 1000) / 1000
	}

	/**
	 * Gets the leading trim
	 * @param   {number}          fontSize   - The font size
	 * @param   {number}          lineHeight - The line height
	 * @returns {Promise<number>}            - The letter spacing
	 */
	const getLeadingTrim = (
		fontSize: number,
		lineHeight: number,
		upm: number,
		capHeight: number
	): number => {
		const textHeight = 2 * Math.round(((capHeight / upm) * fontSize) / 2)

		return (lineHeight - textHeight) / 2
	}

	/**
	 * Setups metrics
	 */
	families.forEach((family) => {
		const upm: string = style.getPropertyValue(`--cap-text-upm-${family}`)
		const capHeight: string = style.getPropertyValue(`--cap-text-cap-height-${family}`)

		if (upm !== '' && capHeight !== '') {
			metrics.push({
				family: family,
				upm: parseInt(upm),
				capHeight: parseInt(capHeight),
			})
		}
	})

	if (metrics.length > 0) {
		/**
		 * Setups levels
		 */
		for (let level = levelsDown; level < levelsUp + 1; level++) {
			const levelSign = level < 0 ? 'minus' : level > 0 ? 'plus' : ''
			const fontSize = getFontSize(level)
			const lineHeight = getLineHeight(fontSize)
			const letterSpacing = getLetterSpacing(fontSize)

			let leadingTrims: { family: CapTextFamily; value: number }[] = []

			metrics.forEach((metric) => {
				const leadingTrim = getLeadingTrim(fontSize, lineHeight, metric.upm, metric.capHeight)

				leadingTrims.push({
					family: metric.family,
					value: leadingTrim,
				})
			})

			scales.push({
				name: `${levelSign}${levelSign !== '' ? '-' : ''}${Math.abs(level)}`,
				fontSize: fontSize,
				lineHeight: lineHeight,
				letterSpacing: letterSpacing,
				leadingTrims: leadingTrims,
			})
		}

		/**
		 * Setups custom properties
		 */
		styles = `:root {
				${scales
					.map(
						(scale) => `
							--cap-text-font-size-${scale.name}: ${scale.fontSize}px;
							--cap-text-line-height-${scale.name}: ${scale.lineHeight}px;
							--cap-text-letter-spacing-${scale.name}-sans: ${scale.letterSpacing}em;

							${scale.leadingTrims
								.map(
									(leadingTrim) =>
										`--cap-text-leading-trim-${scale.name}-${leadingTrim.family}: ${leadingTrim.value}px;`
								)
								.join('')}`
					)
					.join('')}
			}`

		/**
		 * Append stylesheet to document
		 */
		stylesheet.textContent = styles.replace(/\s+/g, '')
		stylesheet.setAttribute('data-cap-styles', '')
		head.appendChild(stylesheet)
	}
}
