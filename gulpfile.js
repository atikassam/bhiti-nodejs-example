// Require gulp
const gulp = require('gulp');

// Require Typescript plugin
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// Lets Create task for our typescript compilation
gulp.task("compile-typescript", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dest"));
});

gulp.task('copy-view', ()=>{
	
	// Use gulp.src to emit the files of a directory
	return gulp.src('./src/view/*.html')
			.pipe(
				// gulp.dest used to piped to write the files in a given destination
				gulp.dest('dest/view')
			)
})

// Build project
gulp.task('build', ['compile-typescript', 'copy-view'])

gulp.task('watch', ()=>{
	
	// Run build commend on file change
	let watcher = gulp.watch('./src/**/*', ['build']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
})

