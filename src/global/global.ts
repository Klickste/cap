export default async () => {
	const body: HTMLBodyElement = document.querySelector('body')
	const head: HTMLHeadElement = document.querySelector('head')
	const style: CSSStyleDeclaration = getComputedStyle(body)
	const levelBase: number = parseInt(style.getPropertyValue('--low-text-level-base'))
	const levelRatio: number = parseFloat(style.getPropertyValue('--low-text-level-ratio'))
	const upm: number = parseInt(style.getPropertyValue('--low-text-upm'))
	const capHeight: number = parseInt(style.getPropertyValue('--low-text-cap-height'))

	let stylesheet: HTMLStyleElement = document.createElement('style')
	let fontScales: {
		name: string
		fontSize: number
		lineHeight: number
		letterSpacing: number
		leadingTrim: number
	}[] = []

	/**
	 * Gets the font size
	 * @param   {number}          level - The level
	 * @returns {Promise<number>}       - The font size
	 */
	const getFontSize = async (level: number): Promise<number> => {
		return Math.round(levelBase * Math.pow(levelRatio, level))
	}

	/**
	 * Gets the line height
	 * @param   {number}          fontSize - The font size
	 * @returns {Promise<number>}          - The line height
	 */
	const getLineHeight = async (fontSize: number): Promise<number> => {
		const ratio = 1.2 + 1.8 * Math.pow(Math.E, -0.12 * fontSize)

		return Math.round((fontSize * ratio) / 2) * 2
	}

	/**
	 * Gets the letter spacing
	 * @param   {number}          fontSize - The font size
	 * @returns {Promise<number>}          - The letter spacing
	 */
	const getLetterSpacing = async (fontSize: number): Promise<number> => {
		const ratio = -0.0223 + 0.185 * Math.pow(Math.E, -0.1745 * fontSize)

		return Math.round(ratio * 1000) / 1000
	}

	/**
	 * Gets the leading trim
	 * @param   {number}          fontSize   - The font size
	 * @param   {number}          lineHeight - The line height
	 * @returns {Promise<number>}            - The letter spacing
	 */
	const getLeadingTrim = async (fontSize: number, lineHeight: number): Promise<number> => {
		const textHeight = 2 * Math.round(((capHeight / upm) * fontSize) / 2)

		return (lineHeight - textHeight) / 2
	}

	for (let level = -2; level < 7; level++) {
		const levelSign = level < 0 ? 'minus' : level > 0 ? 'plus' : ''
		const fontSize = await getFontSize(level)
		const lineHeight = await getLineHeight(fontSize)
		const letterSpacing = await getLetterSpacing(fontSize)
		const leadingTrim = await getLeadingTrim(fontSize, lineHeight)

		fontScales.push({
			name: `${levelSign}${levelSign !== '' ? '-' : ''}${Math.abs(level)}`,
			fontSize: fontSize,
			lineHeight: lineHeight,
			letterSpacing: letterSpacing,
			leadingTrim: leadingTrim,
		})
	}

	stylesheet.textContent = `:root {
      ${fontScales
				.map(
					(scale) => `
        --low-text-font-size-${scale.name}: ${scale.fontSize}px;
        --low-text-line-height-${scale.name}: ${scale.lineHeight}px;
        --low-text-letter-spacing-${scale.name}: ${scale.letterSpacing}em;
        --low-text-leading-trim-${scale.name}: ${scale.leadingTrim}px;
      `
				)
				.join('')}
    }`

	stylesheet.setAttribute('data-low-styles', '')
	head.appendChild(stylesheet)
}
