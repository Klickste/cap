const fontkit = require('fontkit')
const fonts = [
  fontkit.openSync('src/fonts/RobotoMono.var.woff2'),
  fontkit.openSync('src/fonts/Inter.var.woff2'),
  fontkit.openSync('src/fonts/Merriweather.var.woff2'),
]

fonts.map((font) => {
  console.log(`${font.fullName}\nUPM: ${font.unitsPerEm}\nCap height: ${font.capHeight}\n`)
})
