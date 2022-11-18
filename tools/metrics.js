const fontkit = require('fontkit')
const fonts = [
	fontkit.openSync('src/assets/fonts/Inter.var.woff2'),
	fontkit.openSync('src/assets/fonts/Merriweather-normal.var.woff2'),
	fontkit.openSync('src/assets/fonts/FiraCode.var.woff2'),
]

fonts.map((font) => {
	console.log(
		`${font.fullName}\nUPM: ${font.unitsPerEm}\ncapHeight: ${font.capHeight}\nxHeight: ${font.xHeight}\n`
	)
})
