var gulp = require('gulp'),
	svgo = require('gulp-svgo'),
	debug = require('gulp-debug');

let svgo_options = {
    "plugins": [
		{
            "removeDoctype": true
        },
        {
            "removeXMLProcInst": true
        },
        {
            "removeComments": true
        },
        {
            "removeMetadata": true
        },
        {
            "removeXMLNS": false
        },
        {
            "removeEditorsNSData": true
        },
        {
            "cleanupAttrs": true
        },
        {
            "inlineStyles": false
        },
        {
            "minifyStyles": true
        },
        {
            "convertStyleToAttrs": true
        },
        {
            "cleanupIDs": false
        },
        {
            "removeRasterImages": false
        },
        {
            "removeUselessDefs": true
        },
        {
            "cleanupNumericValues": true
        },
        {
            "cleanupListOfValues": false
        },
        {
            "convertColors": false
        },
        {
            "removeUnknownsAndDefaults": true
        },
        {
            "removeNonInheritableGroupAttrs": true
        },
        {
            "removeUselessStrokeAndFill": false
        },
        {
            "removeViewBox": false
        },
        {
            "cleanupEnableBackground": true
        },
        {
            "removeHiddenElems": true
        },
        {
            "removeEmptyText": true
        },
        {
            "convertShapeToPath": true
        },
        {
            "moveElemsAttrsToGroup": true
        },
        {
            "moveGroupAttrsToElems": true
        },
        {
            "collapseGroups": true
        },
        {
            "convertPathData": false
        },
        {
            "convertTransform": false
        },
        {
            "removeEmptyAttrs": true
        },
        {
            "removeEmptyContainers": true
        },
        {
            "mergePaths": false
        },
        {
            "removeUnusedNS": true
        },
        {
            "sortAttrs": false
        },
        {
            "removeTitle": true
        },
        {
            "removeDesc": true
        },
        {
            "removeDimensions": false
        },
        {
            "removeStyleElement": false
        },
        {
            "removeScriptElement": false
        }
    ]
};


gulp.task('svg_compress', () => {
	return gulp.src('src/resources/svg/**/*.svg')
				.pipe(debug())
				.pipe(svgo(svgo_options))
				.pipe(gulp.dest('dist/resources/svg'));
});
