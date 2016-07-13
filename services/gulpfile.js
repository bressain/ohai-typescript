const gulp = require('gulp')
const nodemon = require('nodemon')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('tsconfig.json')
gulp.task('build', () => {
  return tsProject.src()
    .pipe(ts(tsProject)).js
    .pipe(gulp.dest('build/'))
})

gulp.task('start-api', ['build'], () => {
  var options = {
    watch: ['build/'],
    script: 'build/api/index.js'
  }
  nodemon(options)
})

gulp.task('watch-api', ['start-api'], () => {
  gulp.watch('api', ['build'])
})

gulp.task('start-static', ['build'], () => {
  var options = {
    watch: ['build/'],
    script: 'build/static/index.js'
  }
  nodemon(options)
})

gulp.task('watch-static', ['start-static'], () => {
  gulp.watch('static', ['build'])
})