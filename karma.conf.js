// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
	config.set({
		basePath : '',
		frameworks : [ 'jasmine', '@angular/cli' ],
		plugins : [
			require('karma-jasmine'),
			require('karma-nightmare'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-junit-reporter'),
			require('@angular/cli/plugins/karma'),
			require('@angular/material/icon'),
			require('karma-scss-preprocessor')
		],
		client : {
			clearContext : false // leave Jasmine Spec Runner output visible in browser
		},
		files : [
			{
				pattern : './src/theme.scss',
				included : true,
				watched : false
			}
		],
		preprocessors: {
		      './src/theme.scss': ['scss']
		    },
		coverageIstanbulReporter : {
			reports : [ 'html', 'lcovonly' ],
			fixWebpackSourcePaths : true
		},
		angularCli : {
			environment : 'dev'
		},
		junitReporter : {
			outputDir : './testresults',
			outputFile : 'test-results.xml'
		},
		nightmareOptions : {
			width : 1920,
			height : 1200,
			show : false,
			fullscreen: true,
			center: true,
			webPreferences: {
				zoomFactor: 0.5
			}
		},
		reporters : [ 'progress', 'kjhtml', 'junit' ],
		port : 9876,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : true,
		browsers : [ 'Nightmare' ],
		singleRun : true
	});
};