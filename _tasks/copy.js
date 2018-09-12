'use strict'

import gulp from 'gulp'

gulp.task('copy', () => {
  return gulp.src([
    //'_assets/animations/**',
    //'_assets/audio/**',
    '_assets/data/**',
    '_assets/gimmicks/**',
    //'_assets/videos/**'
  ], {
    base: '_assets'
  })
    .pipe(gulp.dest('_site/assets/'))
})
