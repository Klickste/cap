const mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .setResourceRoot('./')
  .disableNotifications()
  .browserSync({
    server: true,
    files: ['index.html', 'dist/style.css'],
  })
  .sass('style.scss', 'style.css', {
    sassOptions: {
      outputStyle: 'compressed',
    },
  })
