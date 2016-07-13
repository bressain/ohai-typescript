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
  gulp.watch('api/lib', ['build'])
})

gulp.task('start-app', ['build'], () => {
  var options = {
    watch: ['build/'],
    script: 'build/app/index.js'
  }
  nodemon(options)
})

gulp.task('watch-app', ['start-app'], () => {
  gulp.watch('app/lib', ['build'])
})