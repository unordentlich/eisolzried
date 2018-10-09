'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('browser-sync', ['build'], () => {
  browserSync({
    server: {
      baseDir: '_site'
    },
    notify: false
    //https: true
  })
})

gulp.task('reload', ['build'], () => { browserSync.reload() })
