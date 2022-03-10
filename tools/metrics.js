const fontkit = require('fontkit')
const fonts = [
  fontkit.openSync('tests/fonts/Inter-roman.var.woff2'),
  fontkit.openSync('tests/fonts/Merriweather-roman.var.woff2'),
]

fonts.map((font) => {
  console.log(
    `${font.fullName}\nUPM: ${font.unitsPerEm}\ncapHeight: ${font.capHeight}\nxHeight: ${font.xHeight}\n`
  )
})
