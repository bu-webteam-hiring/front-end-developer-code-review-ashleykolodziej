module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({

		// 2. All functions go here.
		watch: {
			grunt: {
				files: [ 'Gruntfile.js' ],
				options: {
					reload: true
				}
			},

			styles: {
				files: [
					'css-dev/**/*.scss'
				],
				tasks: [ 'styles' ],
				options: {
					spawn: false,
				}
			}
		},


		sass: {
			prod: {
				options: {
					outputStyle: 'expanded',
					bundleExec: true
				},
				files: {
					'style.css': 'css-dev/style.scss'
				}
			},
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-notify' );

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask( 'styles',   [ 'sass' ] );
	grunt.registerTask( 'default',  [ 'watch' ] );

};
