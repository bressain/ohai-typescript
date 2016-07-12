const gulp = require('gulp')
const nodemon = require('nodemon')
const ts = require('gulp-typescript')

gulp.task('start', ['build'], () => {
  var options = {
    watch: ['build/'],
    script: 'build/index.js'
  }
  nodemon(options)
})

const tsProject = ts.createProject('tsconfig.json')
gulp.task('build', () => {
  return tsProject.src()
    .pipe(ts(tsProject)).js
    .pipe(gulp.dest('build/'))
})

gulp.task('watch', ['start'], () => {
  gulp.watch('lib', ['build'])
})
