const fontkit = require('fontkit')
const fonts = [
  fontkit.openSync('fonts/Inter-roman.var.woff2'),
  fontkit.openSync('fonts/Merriweather-roman.var.woff2'),
]

fonts.map((font) => {
  console.log(`${font.fullName}\nUPM: ${font.unitsPerEm}\nCap height: ${font.capHeight}\n`)
})
