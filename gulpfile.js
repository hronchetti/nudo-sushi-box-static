/**
 * ----------------------------------------------------------------------
 *  Set Project Paths
 * ----------------------------------------------------------------------
 */

const srcPath = "./src/"
const staticPath = "./static/"
const distPath = "./dist/"

/**
 * ----------------------------------------------------------------------
 *  Require and Initialize all Modules
 * ----------------------------------------------------------------------
 */

const { src, dest, watch, series } = require("gulp")
const browserSync = require("browser-sync")
const rename = require("gulp-rename")
const sass = require("gulp-sass")
const uglify = require("gulp-uglify")
const fileinclude = require("gulp-file-include")
const del = require("del")
const babel = require("gulp-babel")

/**
 * ----------------------------------------------------------------------
 *  Tasks
 * ----------------------------------------------------------------------
 */

const buildScss = () => {
  return src(srcPath + "scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(distPath + "css/"))
}

const buildJS = () => {
  return src(srcPath + "js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(distPath + "js/"))
}

const buildHTML = () => {
  return src(srcPath + "html/**/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest(distPath))
}

const buildStatic = () => {
  return src(staticPath + "**/*").pipe(dest(distPath))
}

const cleanBuild = () => {
  return del([distPath])
}
/**
 * ----------------------------------------------------------------------
 *  Define exports/tasks
 * ----------------------------------------------------------------------
 */

exports.default = () => {
  browserSync.init(["*.css", "*.scss"], {
    server: {
      baseDir: "./dist",
    },
  })
  watch(srcPath + "js/**/*.js", buildJS)
  watch(srcPath + "scss/**/*.scss", buildScss)
  watch(srcPath + "html/**/*.html", buildHTML)
  watch(staticPath + "**/*", buildStatic)
  watch([
    srcPath + "html/**/*.html",
    srcPath + "js/**/*.js",
    srcPath + "scss/**/*.scss",
  ]).on("change", browserSync.reload)
}

exports.build = series([buildJS, buildScss, buildHTML, buildStatic])

exports.clean = series(cleanBuild)
