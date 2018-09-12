'use strict'

import gulp from 'gulp'
import log from 'fancy-log'
import swPrecache from 'sw-precache'
import path from 'path'

function writeServiceWorkerFile (rootDir, handleFetch, callback) {
  const config = {
    cacheId: 'ff-eisolzried',
    handleFetch: handleFetch,
    logger: log,
    staticFileGlobs: [
      `${rootDir}/**/*.html`,
      `${rootDir}/assets/{css,js,icons}/*`,
      `${rootDir}/search.json`,
      `${rootDir}/search-by.json`,
      `${rootDir}/assets/data/termine.ics`,
      `${rootDir}/assets/gimmicks/grisu.webm`
    ],
    stripPrefix: `${rootDir}/`,
    verbose: false
  }

  swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback)
}

gulp.task('precache', (cb) => {
  writeServiceWorkerFile('_site', false, cb)
})

gulp.task('precache:prod', (cb) => {
  writeServiceWorkerFile('_site', true, cb)
})
