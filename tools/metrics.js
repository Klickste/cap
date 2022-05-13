const fontkit = require('fontkit')
const fonts = [
  fontkit.openSync('assets/fonts/Inter-normal.var.woff2'),
  fontkit.openSync('assets/fonts/Merriweather-normal.var.woff2'),
  fontkit.openSync('assets/fonts/FiraCode.var.woff2'),
]

fonts.map((font) => {
  console.log(
    `${font.fullName}\nUPM: ${font.unitsPerEm}\ncapHeight: ${font.capHeight}\nxHeight: ${font.xHeight}\n`
  )
})
